import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: `/math-quiz/`,
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    sourcemap: true,
    cssCodeSplit: true,
    minify: true,
  },
  server: {
    host: "localhost",
    port: 5000,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 4000,
    strictPort: true,
  },
  appType: "spa",
});
