// @hpcreery/tracespace-plotter
// build abstract board images from @hpcreery/tracespace-parser ASTs
import type { ChildNode, GerberTree } from "@hpcreery/tracespace-parser"
import type * as Shapes from "@src/step/layer/shape/shape"
import { type ApertureTransform, createTransformStore, type TransformStore } from "./aperture-transform-store"
import { createGraphicPlotter, type GraphicPlotter } from "./graphic-plotter"
import { createLocationStore, type Location, type LocationStore } from "./location-store"
import { getPlotOptions, type PlotOptions } from "./options"
import { createToolStore, type Tool, type ToolStore } from "./tool-store"
import type { ImageTree } from "./tree"
import { IMAGE } from "./tree"

export { positionsEqual, TWO_PI } from "./coordinate-math"
export * from "./graphic-plotter"
export * from "./graphic-plotter/plot-macro"
export * from "./tool-store"
export * from "./tree"

export function plot(tree: GerberTree): ImageTree {
  const plotOptions: PlotOptions = getPlotOptions(tree)
  const toolStore: ToolStore = createToolStore()
  const children = plotShapes(tree.children, plotOptions, toolStore)

  return {
    type: IMAGE,
    units: plotOptions.units,
    children,
  }
}

export function plotShapes(nodes: ChildNode[], plotOptions: PlotOptions, toolStore: ToolStore, block?: string): Shapes.Shape[] {
  const locationStore: LocationStore = createLocationStore()
  const transformStore: TransformStore = createTransformStore()
  const graphicPlotter: GraphicPlotter = createGraphicPlotter()
  const children: Shapes.Shape[] = []

  for (const node of nodes) {
    const location: Location = locationStore.use(node, plotOptions)
    const apertureTransform: ApertureTransform = transformStore.use(node)
    const tool: Tool = toolStore.use(node, plotOptions)
    if (toolStore.block && toolStore.block != block) continue
    const graphics: Shapes.Shape[] = graphicPlotter.plot(node, tool, location, apertureTransform)

    children.push(...graphics)
  }
  return children
}
