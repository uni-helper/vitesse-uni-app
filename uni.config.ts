import { defineConfig } from '@uni-helper/uni'

export default defineConfig({
  platform: {
    default: 'h5',
    alias: {
      'h5': ['h'],
      'mp-weixin': ['wx'],
      'mp-alipay': ['al'],
      'mp-toutiao': ['tt'],
    },
  },
  autoGenerate: {
    pages: 'install',
    manifest: 'install',
  },
})
