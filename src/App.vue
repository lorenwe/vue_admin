<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>

