import type { Shape } from "@repo/grx-engine/step/layer/shape/shape"

export type GDSIIHierarchy = {
  [cellName: string]: {
    layer: number
    shape: Shape
  }[]
}

export type LayerHierarchy = {
  [layer: number]: {
    shapes: Shape[]
  }
}
