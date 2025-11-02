


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
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        shop: path.resolve(__dirname, 'shop.html'),
        product: path.resolve(__dirname, 'product.html'),
        cart: path.resolve(__dirname, 'cart.html'),
        checkout: path.resolve(__dirname, 'checkout.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        blogPost: path.resolve(__dirname, 'blog-post.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      }
    }
  }
});

