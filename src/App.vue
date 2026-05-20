<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { useTheme } from "@/common/composables/useTheme"
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

const { initTheme } = useTheme()

// 初始化主题
initTheme()

</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

