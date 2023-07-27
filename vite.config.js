import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "markdown-it-latex-vite", // Replace with your package name
      formats: ["umd", "es"],
    },
    sourcemap: true,
    rollupOptions: {
      external: [], // List any external dependencies if necessary
    },
  },
});
