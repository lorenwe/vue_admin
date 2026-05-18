import { ref, watch } from "vue"
import type { Ref } from "vue"
import type { LayoutsConfig } from "@/layouts/config"
import { setLayoutsConfig } from "@/common/utils/local-storage"
import { layoutsConfig } from "@/layouts/config"
import { defineStore } from "pinia"


type SettingsStore = {
  [K in keyof LayoutsConfig]: Ref<LayoutsConfig[K]>
}

type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore("settings", () => {

    const state = Object.fromEntries(
        Object.entries(layoutsConfig).map(([key, value]) => {
            const refValue = ref(value)
        
            // 监听变化
            watch(refValue, () => {
                setLayoutsConfig(getCacheData())
            })
        
            return [key, refValue]
        })
    ) as SettingsStore

  // 获取要缓存的数据：将 state 对象转化为 settings 对象
  const getCacheData = () => {
    const settings = {} as LayoutsConfig
    for (const [key, value] of Object.entries(state)) {
      // @ts-expect-error ignore
      settings[key as SettingsStoreKey] = value.value
    }
    return settings
  }

  return state
})