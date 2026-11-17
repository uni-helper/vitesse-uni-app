import { defineMiddleware } from '@uni-helper/vite-plugin-uni-middleware/runtime'
import { ref } from 'vue'

/**
 * 最近一次经过中间件的页面路径，页面里读出来展示，方便确认中间件真的执行了。
 * 真实项目里通常换成登录态、权限、埋点之类的共享状态。
 */
export const visitedRoute = ref('')

/**
 * 全局中间件，在 `pages.config.ts` 里挂到所有页面。
 *
 * 返回 `false` 取消导航，返回地址则改道；这里只记录不拦截。
 */
export default defineMiddleware((to) => {
  visitedRoute.value = to.route
})
