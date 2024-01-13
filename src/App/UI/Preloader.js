import assetStore from "../Utils/AssetStore";

export default class Preloader {
  constructor() {
    this.assetStore = assetStore;

    // access to DOM elements
    this.overlay = document.querySelector(".overlay");
    this.loading = document.querySelector(".loading");
    this.startButton = document.querySelector(".start");

    // Create % loaded counter
    this.assetStore.subscribe((state) => {
      this.numberOfLoadedAssets = Object.keys(state.loadedAssests).length;
      this.numberOfAssetsToLoad = state.assetsToLoad.length;
      this.progress = this.numberOfLoadedAssets / this.numberOfAssetsToLoad;
      document.getElementById("progressPercentage").innerHTML = `${Math.trunc(
        this.progress * 100
      )}`;

      if (this.progress === 1) {
        this.loading.classList.add("fade");
        window.setTimeout(() => {
          this.ready(), 1300;
        });
      }
    });
  }

  ready() {
    this.loading.remove()
    this.startButton.style.display = "inline";
    this.startButton.classList.add("fadeIn");

    this.startButton.addEventListener("click", () => {
      this.overlay.classList.add("fade");
      this.startButton.classList.add("fadeOut");
      window.setTimeout(() => {
        this.overlay.remove();
        this.startButton.remove();
      }, 1300);
    }, { once: true });
  }
}
