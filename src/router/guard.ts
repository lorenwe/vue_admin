import type { Router } from "vue-router"

export function registerNavigationGuard(router: Router) {

    // 全局前置守卫
    router.beforeEach(async (to, _from) => {
        return { ...to, replace: true }
    })

    // 全局后置钩子
    router.afterEach((to) => {
        // setRouteChange(to)
        // setTitle(to.meta.title)
        // NProgress.done()
    })

}