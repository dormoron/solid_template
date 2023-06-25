import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solidPlugin(), UnoCSS()],
  server: {
    port: 3000,
  },
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "*": path.resolve(""),
    },
  },
  build: {
    target: "esnext",
  },
});
