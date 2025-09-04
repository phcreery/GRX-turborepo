import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { comlink } from "vite-plugin-comlink"
import glslify from "rollup-plugin-glslify"
import arraybuffer from "vite-plugin-arraybuffer"

// console.log(resolve("../../packages/grx-engine/dist/packages/grx-engine/src"))
console.log(resolve(__dirname, "../../packages/"))

export default defineConfig({
  base: "./",
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  // root: resolve("src/renderer"),
  resolve: {
    alias: {
      "@src": resolve("src"),
      // "@repo": resolve(__dirname, "../../packages/"), // Adjust path as needed
      // "@repo/grx-engine": resolve("../../packages/grx-engine"),
      // "@repo/grx-engine": resolve("../../packages/grx-engine/dist/packages/grx-engine/src/"),
      // "@repo/grx-engine": resolve("@repo/grx-engine"),
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  build: {
    outDir: resolve("out/web"),
  },
  plugins: [
    react(),
    comlink(),
    arraybuffer(),
    glslify({
      compress: false,
      // @ts-ignore - glslify options are not typed
      transform: ["glslify-import"],
    }),
  ],
  worker: {
    format: "es",
    plugins: () => [
      comlink(),
      arraybuffer(),
      glslify({
        compress: false,
        // @ts-ignore - glslify options are not typed
        transform: ["glslify-import"],
      }),
    ],
  },
})
