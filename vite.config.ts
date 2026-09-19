import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { inspectAttr } from "kimi-plugin-inspect-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [inspectAttr(), react()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  server: { port: 3000 },
});
