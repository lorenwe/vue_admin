<script lang="ts" setup>
import { computed } from "vue"
import { storeToRefs } from 'pinia'
import { useSettingsStore } from "@/pinia/stores/settings"

import { useLayoutMode } from "@/common/composables/useLayoutMode"
import { useDevice } from "@/common/composables/useDevice"
import LeftMode from "./modes/LeftMode.vue"

const settingsStore = useSettingsStore()

// const { showSettings, showTagsView, showWatermark } = storeToRefs(settingsStore)

const { isMobile } = useDevice()

const { isLeft, isTop, isLeftTop } = useLayoutMode()

console.log("左侧模式")



</script>

<template>
  <div>
    <!-- 左侧模式 -->
    <LeftMode v-if="isLeft || isMobile" />
    <!-- 顶部模式 -->
    <!-- <TopMode v-else-if="isTop" /> -->
    <!-- 混合模式 -->
    <!-- <LeftTopMode v-else-if="isLeftTop" /> -->
    <!-- 右侧设置面板 -->
    <!-- <RightPanel v-if="showSettings"> -->
      <!-- <Settings /> -->
    <!-- </RightPanel> -->
  </div>
</template>