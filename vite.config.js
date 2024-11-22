import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

const HOST = process.env.MONACA_SERVER_HOST || "0.0.0.0";

export default defineConfig({
  root: "./src",
  base: "",
  envDir: "../",
  plugins: [react(), legacy()],
  build: {
    outDir: "../www",
    minify: false,
    emptyOutDir: false,
  },
  server: {
    host: HOST,
    port: 8080,
  },
  publicDir: "../public",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      Icons: path.resolve(__dirname, "src/assets/icons/"),
    },
  },
});
