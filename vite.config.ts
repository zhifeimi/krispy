import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { inspectAttr } from "kimi-plugin-inspect-react";
import * as esbuild from "esbuild";
import { init as initCjsLexer, parse as parseCjs } from "cjs-module-lexer";
import {
  type Loader,
  ResolutionMode,
  ResolveError,
  Workspace,
} from "@deno/loader";

// This project has no node_modules: dependencies are declared in deno.json
// and live in Deno's global cache. Vite's resolver only walks node_modules,
// so two adapters bridge the gap:
//
// 1. denoResolver() resolves bare specifiers (and the "@/" alias) through
//    Deno's workspace loader, returning plain file paths into the Deno cache
//    so the normal Vite/Rollup pipeline works unchanged.
//
// 2. vendorCjsDeps() pre-bundles the few CJS-only packages (react, react-dom)
//    into ESM shims with esbuild, because Vite's own CJS machinery
//    (optimizeDeps in dev, and parts of the build commonjs plugin) resolves
//    through node_modules paths only.

/** Bare specifiers of CJS-only packages to pre-bundle as ESM. */
const CJS_DEPS = [
  "react",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-dom",
  "react-dom/client",
  // CJS-only dependencies of react-router's ESM build (no "module"/"exports"
  // in their package.json, so platform:"browser" cannot find an ESM entry).
  "cookie",
  "set-cookie-parser",
] as const;

const IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/** Recursively collect a CJS module's named exports, following re-exports. */
function collectCjsExports(file: string, seen = new Set<string>()): string[] {
  if (seen.has(file)) return [];
  seen.add(file);
  const { exports, reexports } = parseCjs(
    fs.readFileSync(file, "utf8"),
    file,
  );
  const names = new Set(exports);
  for (const reexport of reexports) {
    const base = path.resolve(path.dirname(file), reexport);
    const target = [base, `${base}.js`, `${base}/index.js`].find((p) =>
      fs.existsSync(p)
    );
    if (!target) continue;
    for (const name of collectCjsExports(target, seen)) names.add(name);
  }
  return [...names];
}

function resolveWithDeno(
  loader: Loader,
  id: string,
  referrer: string,
): string | null {
  try {
    const resolved = loader.resolveSync(id, referrer, ResolutionMode.Import);
    return resolved.startsWith("file:") ? fileURLToPath(resolved) : null;
  } catch (e) {
    if (e instanceof ResolveError) return null;
    throw e;
  }
}

/**
 * Bundle each CJS dep into <root>/.vite/cjs-deps/<mode>/ as a real ESM file
 * (default export + statically-detectable named exports), returning exact-match
 * alias entries that point the bare specifiers at those files.
 *
 * All deps are bundled in a single esbuild run with code splitting: code they
 * share (react-dom requiring react, the jsx runtimes requiring react, ...)
 * lands in common chunks, so every entry — and every re-bundle optimizeDeps
 * makes of them — resolves to ONE module instance. Bundling each dep
 * separately would give each its own inline copy of React, which breaks hook
 * dispatch at runtime ("Invalid hook call").
 */
async function vendorCjsDeps(
  root: string,
  loader: Loader,
  mode: "dev" | "prod",
) {
  const outDir = path.join(root, ".vite", "cjs-deps", mode);
  fs.mkdirSync(outDir, { recursive: true });
  const referrer = pathToFileURL(path.join(root, "deno.json")).href;
  await initCjsLexer();

  const outName = (specifier: string) =>
    `${specifier.replaceAll("/", "__")}.js`;
  const lock = path.join(root, "deno.lock");
  // Re-vendor only when an output is missing or older than the lockfile.
  const stale = CJS_DEPS.some((specifier) => {
    const outFile = path.join(outDir, outName(specifier));
    return !fs.existsSync(outFile) ||
      (fs.existsSync(lock) &&
        fs.statSync(lock).mtimeMs > fs.statSync(outFile).mtimeMs);
  });

  if (stale) {
    // Clear stale hashed chunks from previous builds before re-vendoring.
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir, { recursive: true });
    const entries = new Map<string, string>();
    for (const specifier of CJS_DEPS) {
      const entry = await resolveWithDeno(loader, specifier, referrer);
      if (!entry) throw new Error(`Could not resolve ${specifier} via Deno`);
      entries.set(specifier, entry);
    }
    await esbuild.build({
      entryPoints: CJS_DEPS.map((specifier) => ({
        in: `cjs-dep:${specifier}`,
        out: outName(specifier).replace(/\.js$/, ""),
      })),
      outdir: outDir,
      bundle: true,
      splitting: true,
      format: "esm",
      platform: "browser",
      target: "es2022",
      logLevel: "silent",
      plugins: [
        {
          name: "cjs-dep-entries",
          setup(build) {
            build.onResolve({ filter: /^cjs-dep:/ }, (args) => ({
              path: args.path,
              namespace: "cjs-dep",
            }));
            // Absolute paths imported from the cjs-dep namespace (the CJS
            // entries) are not default-resolved by esbuild — hand them back
            // to the file namespace explicitly.
            build.onResolve({ filter: /^\// }, (args) => ({
              path: args.path,
            }));
            build.onLoad(
              { filter: /.*/, namespace: "cjs-dep" },
              (args) => {
                const specifier = args.path.slice("cjs-dep:".length);
                const entry = entries.get(specifier)!;
                const names = collectCjsExports(entry).filter((n) =>
                  n !== "default" && n !== "__esModule" && IDENT_RE.test(n)
                );
                // Import the namespace rather than the default: for CJS that
                // sets __esModule (TypeScript-compiled output), esbuild's
                // interop leaves `default` undefined, so a default import
                // would destructure nothing. The namespace always carries
                // every export as a copied prop.
                return {
                  contents: [
                    `import * as __cjsNs from ${JSON.stringify(entry)};`,
                    `export default __cjsNs.default ?? __cjsNs;`,
                    `export const { ${names.join(", ")} } = __cjsNs;`,
                  ].join("\n"),
                  loader: "js",
                };
              },
            );
          },
        },
        {
          name: "deno-resolve",
          setup(build) {
            // Bare specifiers (e.g. react-dom's require("react")) have no
            // node_modules to resolve through — use Deno's loader.
            build.onResolve({ filter: /^[^./]/ }, async (args) => {
              const ref = args.importer
                ? pathToFileURL(args.importer).href
                : referrer;
              const resolved = await resolveWithDeno(loader, args.path, ref);
              return resolved ? { path: resolved } : undefined;
            });
          },
        },
      ],
      define: {
        "process.env.NODE_ENV": JSON.stringify(
          mode === "dev" ? "development" : "production",
        ),
      },
    });
  }

  const alias: { find: RegExp; replacement: string }[] = [];
  for (const specifier of CJS_DEPS) {
    const escaped = specifier.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    alias.push({
      find: new RegExp(`^${escaped}$`),
      replacement: path.join(outDir, outName(specifier)),
    });
  }
  return alias;
}

function denoResolver(loaderPromise: Promise<Loader>, rootReferrer: string) {
  return (): Plugin => ({
    name: "deno-resolver",
    enforce: "pre",
    async resolveId(id, importer) {
      // Only bare specifiers go through Deno. Relative/absolute paths,
      // virtual modules, queries, and scheme ids (node:, http:, ...) are
      // left to Vite.
      if (
        id.startsWith("\0") || id.startsWith(".") || id.startsWith("/") ||
        id.includes("?") || id.includes(":")
      ) {
        return null;
      }
      const referrer = importer && !importer.startsWith("\0")
        ? pathToFileURL(importer).href
        : rootReferrer;
      const loader = await loaderPromise;
      return resolveWithDeno(loader, id, referrer);
    },
  });
}

// https://vite.dev/config/
export default defineConfig(async ({ command }) => {
  const root = import.meta.dirname!;
  const configPath = path.join(root, "deno.json");
  // Resolve for the browser: the default "node" platform picks CJS entries
  // (e.g. react-router's exports."node".default → index.js), which the dev
  // server would serve raw and the browser cannot import as ESM.
  const loaderPromise = new Workspace({ configPath, platform: "browser" })
    .createLoader();
  const mode = command === "serve" ? "dev" : "prod";
  const cjsAliases = await vendorCjsDeps(root, await loaderPromise, mode);

  return {
    base: "./",
    plugins: [
      denoResolver(loaderPromise, pathToFileURL(configPath).href)(),
      inspectAttr(),
      react(),
    ],
    resolve: { alias: cjsAliases },
    server: { port: 3000 },
    // Prebundle cache lives in <root>/.vite instead of node_modules/.vite.
    cacheDir: ".vite",
    // Force every vendored shim through optimizeDeps. The scanner misses
    // specifiers that are only imported from the Deno cache (e.g.
    // react-dom/client, cookie), and a shim served raw bundles its own
    // inline copy of React while the prebundled ones share another —
    // duplicate Reacts break hook dispatch ("Invalid hook call").
    optimizeDeps: { include: [...CJS_DEPS] },
    build: {
      // Any CJS that slips past the vendored shims (loaded straight from the
      // Deno npm cache) still gets converted by the commonjs plugin, which by
      // default only transforms files under node_modules.
      commonjsOptions: {
        include: [/node_modules/, /registry\.npmjs\.org/],
      },
    },
  };
});
