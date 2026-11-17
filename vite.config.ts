import Uni from '@uni-helper/plugin-uni'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperMiddleware from '@uni-helper/vite-plugin-uni-middleware'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UniHelperPlatform from '@uni-helper/vite-plugin-uni-platform'
import UniHelperPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://uni-helper.js.org/vite-plugin-uni-platform
    // 按文件名分流，如 index.vue / index.h5.vue / index.mp-weixin.vue
    // uni-pages 按插件名识别它，用来过滤并按需剥掉平台后缀
    UniHelperPlatform(),
    // https://uni-helper.js.org/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://uni-helper.js.org/vite-plugin-uni-pages
    UniHelperPages({
      dts: 'src/uni-pages.d.ts',
    }),
    // https://uni-helper.js.org/vite-plugin-uni-layouts
    UniHelperLayouts(),
    // https://uni-helper.js.org/plugin-uni
    Uni(),
    // https://uni-helper.js.org/vite-plugin-uni-platform-modifier
    // 模板里写 class.h5 / @click.mp-weixin，编译期只留当前平台那一份
    UniHelperPlatformModifier(),
    // https://uni-helper.js.org/vite-plugin-uni-middleware
    // 读 UniHelperPages 生成的 pages.json，必须排在它后面
    UniHelperMiddleware(),
    UniPolyfill(),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
  ],
})
