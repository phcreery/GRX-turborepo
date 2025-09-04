// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/phcre/Documents/JS/GRX-turborepo/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/phcre/Documents/JS/GRX-turborepo/node_modules/@vitejs/plugin-react/dist/index.js";
import { comlink } from "file:///C:/Users/phcre/Documents/JS/GRX-turborepo/node_modules/vite-plugin-comlink/dist/index.js";
import glslify from "file:///C:/Users/phcre/Documents/JS/GRX-turborepo/node_modules/rollup-plugin-glslify/index.js";
import arraybuffer from "file:///C:/Users/phcre/Documents/JS/GRX-turborepo/node_modules/vite-plugin-arraybuffer/dist/main.js";
var __vite_injected_original_dirname = "C:\\Users\\phcre\\Documents\\JS\\GRX-turborepo\\apps\\web";
console.log(resolve(__vite_injected_original_dirname, "../../packages/"));
var vite_config_default = defineConfig({
  base: "./",
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
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
      "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs"
    }
  },
  build: {
    outDir: resolve("out/web")
  },
  plugins: [
    react(),
    comlink(),
    arraybuffer(),
    glslify({
      compress: false,
      // @ts-ignore - glslify options are not typed
      transform: ["glslify-import"]
    })
  ],
  worker: {
    format: "es",
    plugins: () => [
      comlink(),
      arraybuffer(),
      glslify({
        compress: false,
        // @ts-ignore - glslify options are not typed
        transform: ["glslify-import"]
      })
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwaGNyZVxcXFxEb2N1bWVudHNcXFxcSlNcXFxcR1JYLXR1cmJvcmVwb1xcXFxhcHBzXFxcXHdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxccGhjcmVcXFxcRG9jdW1lbnRzXFxcXEpTXFxcXEdSWC10dXJib3JlcG9cXFxcYXBwc1xcXFx3ZWJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3BoY3JlL0RvY3VtZW50cy9KUy9HUlgtdHVyYm9yZXBvL2FwcHMvd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIlxyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcclxuaW1wb3J0IHsgY29tbGluayB9IGZyb20gXCJ2aXRlLXBsdWdpbi1jb21saW5rXCJcclxuaW1wb3J0IGdsc2xpZnkgZnJvbSBcInJvbGx1cC1wbHVnaW4tZ2xzbGlmeVwiXHJcbmltcG9ydCBhcnJheWJ1ZmZlciBmcm9tIFwidml0ZS1wbHVnaW4tYXJyYXlidWZmZXJcIlxyXG5cclxuLy8gY29uc29sZS5sb2cocmVzb2x2ZShcIi4uLy4uL3BhY2thZ2VzL2dyeC1lbmdpbmUvZGlzdC9wYWNrYWdlcy9ncngtZW5naW5lL3NyY1wiKSlcclxuY29uc29sZS5sb2cocmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLi4vcGFja2FnZXMvXCIpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBcIi4vXCIsXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBfX0FQUF9WRVJTSU9OX186IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX3ZlcnNpb24pLFxyXG4gIH0sXHJcbiAgLy8gcm9vdDogcmVzb2x2ZShcInNyYy9yZW5kZXJlclwiKSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBzcmNcIjogcmVzb2x2ZShcInNyY1wiKSxcclxuICAgICAgLy8gXCJAcmVwb1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuLi8uLi9wYWNrYWdlcy9cIiksIC8vIEFkanVzdCBwYXRoIGFzIG5lZWRlZFxyXG4gICAgICAvLyBcIkByZXBvL2dyeC1lbmdpbmVcIjogcmVzb2x2ZShcIi4uLy4uL3BhY2thZ2VzL2dyeC1lbmdpbmVcIiksXHJcbiAgICAgIC8vIFwiQHJlcG8vZ3J4LWVuZ2luZVwiOiByZXNvbHZlKFwiLi4vLi4vcGFja2FnZXMvZ3J4LWVuZ2luZS9kaXN0L3BhY2thZ2VzL2dyeC1lbmdpbmUvc3JjL1wiKSxcclxuICAgICAgLy8gXCJAcmVwby9ncngtZW5naW5lXCI6IHJlc29sdmUoXCJAcmVwby9ncngtZW5naW5lXCIpLFxyXG4gICAgICAvLyAvZXNtL2ljb25zL2luZGV4Lm1qcyBvbmx5IGV4cG9ydHMgdGhlIGljb25zIHN0YXRpY2FsbHksIHNvIG5vIHNlcGFyYXRlIGNodW5rcyBhcmUgY3JlYXRlZFxyXG4gICAgICBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjogXCJAdGFibGVyL2ljb25zLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2luZGV4Lm1qc1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHJlc29sdmUoXCJvdXQvd2ViXCIpLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGNvbWxpbmsoKSxcclxuICAgIGFycmF5YnVmZmVyKCksXHJcbiAgICBnbHNsaWZ5KHtcclxuICAgICAgY29tcHJlc3M6IGZhbHNlLFxyXG4gICAgICAvLyBAdHMtaWdub3JlIC0gZ2xzbGlmeSBvcHRpb25zIGFyZSBub3QgdHlwZWRcclxuICAgICAgdHJhbnNmb3JtOiBbXCJnbHNsaWZ5LWltcG9ydFwiXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgd29ya2VyOiB7XHJcbiAgICBmb3JtYXQ6IFwiZXNcIixcclxuICAgIHBsdWdpbnM6ICgpID0+IFtcclxuICAgICAgY29tbGluaygpLFxyXG4gICAgICBhcnJheWJ1ZmZlcigpLFxyXG4gICAgICBnbHNsaWZ5KHtcclxuICAgICAgICBjb21wcmVzczogZmFsc2UsXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGdsc2xpZnkgb3B0aW9ucyBhcmUgbm90IHR5cGVkXHJcbiAgICAgICAgdHJhbnNmb3JtOiBbXCJnbHNsaWZ5LWltcG9ydFwiXSxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1YsU0FBUyxlQUFlO0FBQ2hYLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8saUJBQWlCO0FBTHhCLElBQU0sbUNBQW1DO0FBUXpDLFFBQVEsSUFBSSxRQUFRLGtDQUFXLGlCQUFpQixDQUFDO0FBRWpELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxJQUNOLGlCQUFpQixLQUFLLFVBQVUsUUFBUSxJQUFJLG1CQUFtQjtBQUFBLEVBQ2pFO0FBQUE7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsUUFBUSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTXJCLHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUSxRQUFRLFNBQVM7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFFVixXQUFXLENBQUMsZ0JBQWdCO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFNBQVMsTUFBTTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUEsUUFFVixXQUFXLENBQUMsZ0JBQWdCO0FBQUEsTUFDOUIsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
