import { createStore } from "zustand/vanilla";

const assetToLoad = [
  { path: "/textures/2l_mars.jpg", id: "mars", type: "texture" },
  { path: "/textures/2k_earth_daymap.jpg", id: "earth", type: "texture" },
  { path: "/textures/2k_mercury.jpg", id: "mercury", type: "texture"},
  { path: "/textures/2k_sun.jpg", id: "sun", type: "texture" },
];

const assetStore = createStore(()=>({
  assetsToLoad,
  loadAssests: {},
  addLoadedAsset: () => {console.log("addLoadedAsset")},
}));

export default assetStore;