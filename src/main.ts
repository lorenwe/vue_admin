import { pinia } from "./pinia"
import { router } from "./router"
import { createApp } from 'vue'
import App from './App.vue'

import "normalize.css"  // 清楚默认样式

// 创建应用实例
const app = createApp(App)

app.use(pinia).use(router)

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount("#app")
})
