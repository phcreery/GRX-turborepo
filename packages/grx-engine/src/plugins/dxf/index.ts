// see https://github.com/vagran/dxf-viewer/tree/master/src/parser
import * as Comlink from "comlink"
import DxfParser from "dxf-parser"
import type { IPlugin } from "../../plugins"
import * as converter from "./converter"

// import file from './testdata/noentities.dxf?url'

export const plugin: IPlugin = async (buffer, props, addLayer, _addMessage): Promise<void> => {
  const decoder = new TextDecoder("utf-8")
  const file = decoder.decode(buffer)
  const parser = new DxfParser()
  let dxf
  try {
    dxf = parser.parse(file)
  } catch (err) {
    return console.error(err)
  }

  const units = converter.getUnits(dxf)
  const layerHierarchy = converter.convert(dxf)

  for (const [layerName, layer] of Object.entries(layerHierarchy)) {
    delete props.name
    addLayer({
      name: layerName,
      units: units,
      color: layer.color,
      image: layer.shapes,
      ...props,
    })
  }
}

Comlink.expose(plugin)
