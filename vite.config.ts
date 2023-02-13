import { defineConfig } from "vite";
import Uni from "@dcloudio/vite-plugin-uni";
import UniHelperManifest from "@uni-helper/vite-plugin-uni-manifest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/uni-helper/vite-plugin-uni-manifest
    UniHelperManifest(),
    Uni(),
  ],
});
