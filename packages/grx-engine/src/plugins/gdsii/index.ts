// import gdsiiFile from './testdata/example.gds2?url'
// import gdsiiFile from './testdata/inv.gds2?url'
// import gdsiiFile from './testdata/example0.gds?url'
// import gdsiiFile from './testdata/example1.gds?url'
// import gdsiiFile from './testdata/example2.gds?url' // broken boundaries
// import gdsiiFile from './testdata/GdsIITests_test.gds?url' // broken boundaries, paths with different ends
// import gdsiiFile from './testdata/GdsIITests_circles.gds?url'

import { recordReader } from "@repo/gdsii/lexer"
import { parse } from "@repo/gdsii/parser"
import * as Comlink from "comlink"
import type { IPlugin } from "../../plugins"

import { convert } from "./converter"
import messages from "./messages"

export const plugin: IPlugin = async (buffer, props, addLayer, addMessage): Promise<void> => {
  messages.setSender(addMessage, "GDSII")
  messages.clear()
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
