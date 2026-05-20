import { pinia } from "./pinia"
import { router } from "./router"
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
import App from './App.vue'
// import 'element-plus/dist/index.css'
import "normalize.css"  // 清楚默认样式
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/common/assets/styles/index.scss"

// 创建应用实例
const app = createApp(App)

app.use(pinia).use(router)
// app.use(ElementPlus)

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount("#app")
})
