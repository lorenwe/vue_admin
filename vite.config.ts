import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      // options
    })
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 静默特定的弃用警告
  //       silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
  //       // 或者静默所有依赖中的警告
  //       quietDeps: true,
  //       // 或者关闭详细输出（减少控制台噪音）
  //       verbose: false
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
