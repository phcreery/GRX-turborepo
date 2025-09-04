import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { comlink } from "vite-plugin-comlink";
import glslify from "rollup-plugin-glslify";
import arraybuffer from "vite-plugin-arraybuffer";
import path from "path";
import { glob } from "glob";
import dts from "unplugin-dts/vite";

const inputFiles = glob.sync(
  path.resolve(__dirname, "src/**/*.ts").replace(/\\/g, "/")
);

console.log(path.resolve(__dirname, "src/**/*.ts"));
console.log("inputFiles:", inputFiles);

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: "./src/index.ts",
      name: "@repo/grx-engine",
      //   fileName: "grx-engine",
      formats: ["es"],
    },
    rollupOptions: {
      // external: ['yeoman-generator'],
      input: inputFiles,
      output: {
        preserveModules: true,
        // preserveModules: false,
        preserveModulesRoot: "src",
        //   entryFileNames: (entry) => {
        //     const { name, facadeModuleId } = entry;
        //     const fileName = `${name}.js`;
        //     if (!facadeModuleId) {
        //       return fileName;
        //   }
        //   const relativeDir = path.relative(
        //     path.resolve(__dirname, 'src'),
        //     path.dirname(facadeModuleId),
        //   );
        //   return path.join(relativeDir, fileName);
        // },
        entryFileNames: ({ name: fileName }) => {
          return `${fileName}.js`;
        },
      },
    },
  },
  plugins: [
    dts(),
    react(),
    // comlink(),
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
      //   comlink(),
      arraybuffer(),
      glslify({
        compress: false,
        // @ts-ignore - glslify options are not typed
        transform: ["glslify-import"],
      }),
    ],
  },
});
