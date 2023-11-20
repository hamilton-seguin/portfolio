import * as THREE from "three";

import Camera from "./Camera";
import Renderer from "./Renderer";
import Loop from "./Utils/Loop";
import World from "./World/World";
import Resize from "./Utils/Resize";
import AssetLoader from "./Utils/AssetLoader";

let instance = null;

export default class App {
  constructor() {
    if (instance) return instance;
    instance = this;

    //threejs elements
    this.canvas = document.querySelector("canvas.threejs");
    this.scene = new THREE.Scene();

    // Asset Loader
    this.assetLoader = new AssetLoader();

    // World
    this.world = new World();

    // Camera and Renderer
    this.camera = new Camera();
    this.renderer = new Renderer();

    // Extra Utils
    this.loop = new Loop();
    this.resize = new Resize();
  }
}
