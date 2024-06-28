import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: `/math-quiz`,
  build: {
    assetsDir: "assets",
  },
  server: {
    port: 5000,
    open: true,
  },
  preview: {
    port: 4000,
  },
});
