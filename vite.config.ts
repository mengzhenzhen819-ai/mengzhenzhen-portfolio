import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ali: path.resolve(__dirname, "project-ali.html"),
        dengta: path.resolve(__dirname, "project-dengta.html"),
        didi: path.resolve(__dirname, "project-didi.html"),
        other: path.resolve(__dirname, "project-other.html"),
        qiandao: path.resolve(__dirname, "project-qiandao.html"),
        waiyanshe: path.resolve(__dirname, "project-waiyanshe.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-router-dom": path.resolve(__dirname, "./src/shims/react-router-dom.ts"),
    },
  },
});
