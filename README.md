# KRISPY

Website for Krispy, a **fictional** bakery — a design demo, not a real business. The address and phone number are placeholders, and the map pin points at a public park. Photos are CC0 (rawpixel, StockSnap). React + TypeScript + Vite + Tailwind CSS, running on **Node.js** with pnpm.

## Requirements

- [Node.js](https://nodejs.org/) ≥ 20.19
- [pnpm](https://pnpm.io/) (`npm i -g pnpm` to install)

## Commands

| Command            | What it does                           |
| ------------------ | -------------------------------------- |
| `pnpm dev`         | Start the Vite dev server on port 3000 |
| `pnpm build`       | Production build to `dist/`            |
| `pnpm preview`     | Serve the production build locally     |
| `pnpm check`       | Type-check the app (`tsc -b`)          |

First run installs dependencies into `node_modules/`.

## Project structure

```
src/sections/        Page sections
src/hooks/           Custom hooks
src/pages/Home.tsx   The page (rendered directly by main.tsx)
src/App.css          Styles specific to the Webapp
src/index.css        Global styles
src/main.tsx         Entry point for rendering the Webapp
index.html           Entry point for the Webapp
package.json         Scripts and dependencies
vite.config.ts       Vite config
tailwind.config.js   Configures Tailwind's theme, plugins, etc.
postcss.config.js    Config file for CSS post-processing tools
```

The `@/...` import alias maps to `./src/` via `resolve.alias` in `vite.config.ts` (type-checked via `paths` in `tsconfig.json`).
