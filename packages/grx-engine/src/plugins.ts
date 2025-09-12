// import gdsiiPluginWorker from "./plugins/gdsii?worker"
// import gerberPluginWorker from "./plugins/gerber?worker"
// import dxfPluginWorker from "./plugins/dxf?worker"
// import ncPluginWorker from "./plugins/nc?worker"
import { LayerProps } from "./step/layer/layer"
import { ShapeProps } from "./step/layer/shape-renderer"
// import * as Comlink from "comlink"

export interface AddLayerProps extends ShapeProps, LayerProps {}

export type IPlugin = (
  buffer: ArrayBuffer,
  props: Partial<AddLayerProps>,
  addLayer: (params: AddLayerProps) => void,
  addMessage?: (title: string, message: string) => Promise<void>,
) => Promise<void>

export type PluginDefinition = {
    plugin: new () => Worker
    matchFile: (ext: string) => boolean
}

export interface PluginsDefinition {
  [key: string]: PluginDefinition
}

const plugins: PluginsDefinition = {
  // 'RS-274X': {
  //   plugin: gerberPluginWorker,
  //   matchFile: (ext) => ["gbr", "geb", "gerber"].includes(ext),
  // },
  // GDSII: {
  //   plugin: gdsiiPluginWorker,
  //   matchFile: (ext) => ["gds", "gdsii", "gds2"].includes(ext),
  // },
  // 'DXF': {
  //   plugin: dxfPluginWorker,
  //   matchFile: (ext) => ["dxf"].includes(ext),
  // },
  // 'NC': {
  //   plugin: ncPluginWorker,
  //   matchFile: (ext) => ["nc", "drl", "dr", "rt", "xnc"].includes(ext),
  // },
}

export function addPlugin(name: string, plugin: PluginDefinition): void {
  plugins[name] = plugin
}

export function getPlugins(): PluginsDefinition {
  return plugins
}

export const defaultFormat = "RS-274X"

// export function registerFunction(plugin: Plugin): void {
//   Comlink.expose(plugin)
// }

export default plugins
