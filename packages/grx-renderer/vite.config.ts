import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { comlink } from "vite-plugin-comlink"
import arraybuffer from "vite-plugin-arraybuffer"
import path, { resolve } from "path"
import { glob } from "glob"
import dts from "unplugin-dts/vite"

const inputFiles = glob.sync(path.resolve(__dirname, "src/**/*.ts").replace(/\\/g, "/"))

export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: "./src/index.ts",
      name: "@repo/grx-renderer",
      formats: ["es"],
    },
    rollupOptions: {
      input: inputFiles,
      external: ["@repo/grx-engine", "comlink"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`
        },
      },
    },
  },
  plugins: [
    dts(),
    // react(),
    // comlink()
  ],
  worker: {
    format: "es",
    plugins: () => [
      // comlink(),
      arraybuffer(),
    ],
  },
})
