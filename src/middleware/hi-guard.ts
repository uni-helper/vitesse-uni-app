import { defineMiddleware } from '@uni-helper/vite-plugin-uni-middleware/runtime'

/**
 * 页面级中间件，只在 `pages/hi` 上生效（见页面的 `definePage`）。
 *
 * 运行顺序是全局中间件在前、页面中间件在后，中间件里拿到的 `to.route`
 * 不带前导斜杠，`to.url` 带前导斜杠和查询串。
 */
export default defineMiddleware((to) => {
  if (!to.url.includes('name=')) {
    console.warn('[middleware] hiGuard: 这次进入没有带 name 参数')
  }
})
