import { defineConfig } from '@uni-helper/unh'

/**
 * unh 配置文件
 * 更多配置请参考：https://uni-helper.js.org/unh/
 */
export default defineConfig({
  platform: {
    // 默认平台
    default: 'h5',
    // 平台别名
    alias: {
      'h5': ['w', 'h'],
      'mp-weixin': 'wx',
    },
  },
})
