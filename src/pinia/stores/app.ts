import { DeviceEnum, SIDEBAR_CLOSED, SIDEBAR_OPENED } from "@/common/constants/app-key"
import { getSidebarStatus, setSidebarStatus } from "@/common/utils/local-storage"
import { ref, reactive } from "vue" // 必须导入 ref
import { defineStore } from "pinia"

interface Sidebar {
  opened: boolean
  withoutAnimation: boolean
}

/** 设置侧边栏状态本地缓存 */
function handleSidebarStatus(opened: boolean) {
  opened ? setSidebarStatus(SIDEBAR_OPENED) : setSidebarStatus(SIDEBAR_CLOSED)
}

export const useAppStore = defineStore("app", () => {
    // 侧边栏状态
    const sidebar: Sidebar = reactive({
        opened: getSidebarStatus() !== SIDEBAR_CLOSED,
        withoutAnimation: false
    })

    // 关闭侧边栏
    const closeSidebar = (withoutAnimation: boolean) => {
        sidebar.opened = false
        sidebar.withoutAnimation = withoutAnimation
    }

    // 设备类型
    const device = ref<DeviceEnum>(DeviceEnum.Desktop)

    return { device, sidebar, closeSidebar }
})