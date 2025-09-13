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
    lib: {
      entry: "./src/index.ts",
      name: "@repo/grx-engine",
      formats: ["es"],
    },
    rollupOptions: {
      input: inputFiles,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`
        },
      },
    },
  },
  // root: resolve("src/renderer"),
  resolve: {
    alias: {
      "@src": resolve("src"),
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
    },
  },
  // build: {
  //   outDir: resolve("out/web"),
  // },
  plugins: [dts(), react(), comlink()],
  worker: {
    format: "es",
    plugins: () => [comlink(), arraybuffer()],
  },
})
