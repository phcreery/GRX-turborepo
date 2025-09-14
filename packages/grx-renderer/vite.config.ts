import { defineConfig } from "vite"
import path, { resolve } from "path"
import { glob } from "glob"
import dts from "unplugin-dts/vite"
import pkg from "./package.json"

const inputFiles = glob.sync(path.resolve(__dirname, "src/**/*.ts").replace(/\\/g, "/"))

export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: "./src/index.ts",
      name: pkg.name,
      formats: ["es"],
    },
    rollupOptions: {
      input: inputFiles,
      // Make sure to externalize deps that shouldn't be bundled
      // external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
      external: ["@repo/grx-engine", "comlink", "gl-matrix"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`
        },
      },
    },
  },
  plugins: [dts()],
  worker: {
    format: "es",
  },
})
