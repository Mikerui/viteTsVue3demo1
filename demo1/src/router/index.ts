import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
/**  创建history路由
 * createWebHashHistory hash 路由
 * createWebHistory history 路由
 * createMemoryHistory 带缓存 history 路由
 */
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HelloWorld
        }
    ]
})



// 删除/重置路由
export function resetRoute(): void {
    router.getRoutes().forEach(route => {
        const { name } = route
        if (name) {
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

export function setupRouter(app: App<Element>) {
    app.use(router)
}
export default router
