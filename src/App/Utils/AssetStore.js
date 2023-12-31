import { createStore } from "zustand/vanilla";

const assetsToLoad = [
  { path: "/textures/2k_mars.jpg", id: "mars", type: "texture" },
  { path: "/textures/2k_earth_daymap.jpg", id: "earth", type: "texture" },
  { path: "/textures/2k_mercury.jpg", id: "mercury", type: "texture" },
  { path: "/textures/2k_sun.jpg", id: "sun", type: "texture" },
];

const assetStore = createStore((set) => ({
  assetsToLoad,
  loadedAssests: {},
  addLoadedAsset: (asset, id) => set((state) => ({
      loadedAssests: { ...state.loadedAssests, [id]: asset },
    })),
}));

export default assetStore;
