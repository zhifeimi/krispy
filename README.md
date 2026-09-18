# my-app

React + TypeScript + Vite + Tailwind CSS + shadcn/ui — running on **Deno**, with
no `node_modules` directory. Dependencies are declared as `npm:`/`jsr:`
specifiers in `deno.json` and resolved into Deno's global cache.

## Requirements

- [Deno](https://deno.com/) v2 (`deno --version` to check)

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `deno task dev`   | Start the Vite dev server on port 3000    |
| `deno task build` | Production build to `dist/`               |
| `deno task preview` | Serve the production build locally      |
| `deno task check` | Type-check the app                        |
| `deno task lint`  | Lint with `deno lint`                     |
| `deno task fmt`   | Format with `deno fmt`                    |

First run downloads dependencies into Deno's cache (`~/.cache/deno`), never
into the project — `nodeModulesDir` is pinned to `"none"` in `deno.json`.
Vite's caches (prebundled deps, and CJS packages like `react` pre-converted
to ESM) live in the gitignored `.vite/` directory.

Note: `deno task fmt` uses Deno's formatter, whose style differs from this
codebase's original formatting — running it will touch most files.

## Project structure

```
src/sections/        Page sections
src/hooks/           Custom hooks
src/types/           Type definitions
src/components/ui/   shadcn/ui components
src/App.css          Styles specific to the Webapp
src/App.tsx          Root React component
src/index.css        Global styles
src/main.tsx         Entry point for rendering the Webapp
index.html           Entry point for the Webapp
deno.json            Tasks, dependencies, and compiler options
vite.config.ts       Vite config (Deno-backed resolver + CJS vendoring)
tailwind.config.js   Configures Tailwind's theme, plugins, etc.
postcss.config.js    Config file for CSS post-processing tools
```

The `@/...` import alias maps to `./src/` via the import map in `deno.json`.
