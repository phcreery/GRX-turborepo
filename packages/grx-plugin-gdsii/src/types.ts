import * as Shapes from "@repo/grx-engine/step/layer/shape/shape"


export type RecordToken = {
  recordType: number;
  data: ArrayBuffer | number[] | string;
};

export type GDSIIHierarchy = {
  [cellName: string]: {
    layer: number
    // datatype: number
    shape: Shapes.Shape
  }[]
}

export type LayerHierarchy = {
  [layer: number]: {
    shapes: Shapes.Shape[]
  }
}
