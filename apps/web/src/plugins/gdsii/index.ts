import { recordReader } from "@repo/grx-plugin-gdsii/lexer"
import { parse } from "@repo/grx-plugin-gdsii/parser"
// import { convert } from "@repo/grx-plugin-gdsii/converter"
import { convert } from "./converter"

import * as Comlink from "comlink"
import { AddLayerProps } from "@src/renderer/plugins"

export async function plugin(
  buffer: ArrayBuffer,
  props: Partial<AddLayerProps>,
  addLayer: (params: AddLayerProps) => void,
  addMessage: (title: string, message: string) => Promise<void>,
): Promise<void> {
  // messages.setSender(addMessage, "GDSII")
  // messages.clear()
  const tokens = recordReader(buffer)
  const bnf = parse(tokens)
  const layerHierarchy = convert(bnf)

  for (const [layer, shapes] of Object.entries(layerHierarchy)) {
    delete props.name
    addLayer({
      name: layer,
      units: 1 / (bnf.UNITS.metersPerDatabaseUnit * 1000),
      image: shapes.shapes,
      ...props,
    })
  }
}

Comlink.expose(plugin)
