


import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: '/mini-store/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),          // для src
      "@components": path.resolve(__dirname, "src/components"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //  "глобальні" стилі
        includePaths: [path.resolve(__dirname, "src/scss")],
        additionalData: `
          @use "@scss/colors" as *;
          @use "@scss/mixins" as *;
          @use "@scss/fonts" as *;
        `
      },
    },
  },
});

