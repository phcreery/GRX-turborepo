import type { Units } from "@repo/grx-engine/types"
import { RenderEngine } from "@repo/grx-renderer"
import type { ContextMenuItemOptions } from "mantine-contextmenu"
import React from "react"

export interface EditorContext {
  renderEngine: RenderEngine
  units: Units
  setUnits: React.Dispatch<React.SetStateAction<Units>>
}

export const EditorConfigProvider = React.createContext<EditorContext>({
  renderEngine: new RenderEngine({ container: document.createElement("div") }),
  units: "mm",
  setUnits: () => {},
})

export const menuItemsBase: ContextMenuItemOptions[] = []

export const menuItems = new Proxy(menuItemsBase, {
  get(target, prop): ContextMenuItemOptions | ((...t: ContextMenuItemOptions[]) => number) {
    if (prop === "push") {
      return (...args): number => {
        if (target.find((item) => item.key === args[0].key)) {
          target = target.filter((item) => item.key !== args[0].key)
        }
        return target[prop](...args)
      }
    }
    return target[prop]
  },
})
