import { defineStore } from "pinia"
import { ref } from "vue"
import { constantRoutes } from "@/router"
import { routerConfig } from "@/router/config"

import type { RouteRecordRaw } from "vue-router"


export const usePermissionStore = defineStore("permission", () => {
    // 可访问的路由
  const routes = ref<RouteRecordRaw[]>([])

  // 有访问权限的动态路由
  const addRoutes = ref<RouteRecordRaw[]>([])

  // 所有路由 = 所有常驻路由 + 所有动态路由  管理员用
  const setAllRoutes = () => {
    set([])
  }

  // 统一设置
  const set = (accessedRoutes: RouteRecordRaw[]) => {
    routes.value = constantRoutes.concat(accessedRoutes)
    addRoutes.value = accessedRoutes
  }

  return { routes, addRoutes, setAllRoutes }
})