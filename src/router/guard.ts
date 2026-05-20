import type { Router } from "vue-router"
import { routerConfig } from "@/router/config"
import { usePermissionStore } from "@/pinia/stores/permission"

export function registerNavigationGuard(router: Router) {

    // 全局前置守卫
    router.beforeEach(async (to, _from) => {
        const permissionStore = usePermissionStore()

        // routerConfig.dynamic
        permissionStore.setAllRoutes()
        console.log("全局前置守卫")
        // return { ...to, replace: true }
        return true
    })

    // 全局后置钩子
    router.afterEach((to) => {
        // setRouteChange(to)
        // setTitle(to.meta.title)
        // NProgress.done()
    })

}