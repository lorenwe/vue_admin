import { createRouter } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { routerConfig } from "./config"
import { registerNavigationGuard } from "./guard"
const Layouts = () => import("@/layouts/index.vue")

/**
 * @name 常驻路由
 * @description 除了 redirect/403/404/login 等隐藏页面，其他页面建议设置唯一的 Name 属性
 */
export const constantRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/login",
  //   component: () => import("@/pages/login/index.vue"),
  //   meta: {
  //     hidden: true
  //   }
  // },
  {
    path: "/",
    component: Layouts,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/pages/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  }, 
  {
    path: "/link",
    meta: {
      title: "文档链接",
      elIcon: "Link"
    },
    children: [
      {
        path: "https://juejin.cn/post/7445151895121543209",
        component: () => {},
        name: "Link1",
        meta: {
          title: "中文文档"
        }
      },
      {
        path: "https://juejin.cn/column/7207659644487139387",
        component: () => {},
        name: "Link2",
        meta: {
          title: "新手教程"
        }
      }
    ]
  }
]

/** 路由实例 */
export const router = createRouter({
  history: routerConfig.history,
  routes: constantRoutes
})

// 注册路由导航守卫
// registerNavigationGuard(router)