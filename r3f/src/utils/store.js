import { create } from 'zustand'

// export const sizesStore = create(() => ({
//   width: window.innerWidth,
//   height: window.innerHeight,
//   pixelRatio: Math.min(window.devicePixelRatio, 2),
// }))

export const appStateStore = create((set) => ({
  physicsReady: false,
  assetsReady: false,
  characterReady: false,
  isFalling: false,
  characterSelected: null,
}))

export const inputStore = create(() => ({
  forward: false,
  backward: false,
  left: false,
  right: false,
  extra: false,
  jump: false,
}))