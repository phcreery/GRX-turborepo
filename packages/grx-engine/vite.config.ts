import { defineConfig } from "vite"
import { comlink } from "vite-plugin-comlink"
import glslify from "rollup-plugin-glslify"
import path, { resolve } from "path"
import { glob } from "glob"
import dts from "unplugin-dts/vite"
import arraybuffer from "vite-plugin-arraybuffer"
import pkg from "./package.json" // Import your package.json

const inputFiles = glob.sync(path.resolve(__dirname, "src/**/*.ts").replace(/\\/g, "/"))

console.log("inputFiles:", inputFiles)

export default defineConfig({
  base: "./",
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: "./src/index.ts",
      name: "@repo/grx-engine",
      formats: ["es"],
    },
    rollupOptions: {
      input: inputFiles,
      // Make sure to externalize deps that shouldn't be bundled
      external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`
        },
      },
    },
  },
  resolve: {
    alias: {
      "@src": resolve("src"),
    },
  },
  plugins: [
    dts(),
    comlink(),
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
