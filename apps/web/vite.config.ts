import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import arraybuffer from "vite-plugin-arraybuffer"

export default defineConfig({
  base: "./",
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      "@src": resolve("src"),
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  build: {
    outDir: resolve("out/web"),
  },
  plugins: [react()],
})
