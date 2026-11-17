import { createNavigationGuardPlugin } from '@uni-helper/vite-plugin-uni-middleware/runtime'
import { middlewares } from 'virtual:uni-middleware'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  // 中间件表由 vite-plugin-uni-middleware 在构建时生成，
  // 注册后 uni 的导航 API 和页面 onShow 都会先跑中间件
  app.use(createNavigationGuardPlugin(middlewares))
  return {
    app,
  }
}
