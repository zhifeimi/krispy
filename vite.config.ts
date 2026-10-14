import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { inspectAttr } from "kimi-plugin-inspect-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: "./",
  // inspectAttr stamps source paths onto every element; dev server only
  plugins: [command === "serve" && inspectAttr(), react()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  server: { port: 3000 },
}));
