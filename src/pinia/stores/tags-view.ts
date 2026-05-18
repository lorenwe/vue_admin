import type { RouteLocationNormalizedGeneric } from "vue-router"
import { getCachedViews, getVisitedViews, setCachedViews, setVisitedViews } from "@/common/utils/local-storage"
import { pinia } from "@/pinia"
// import { useSettingsStore } from "./settings"

export type TagView = Partial<RouteLocationNormalizedGeneric>