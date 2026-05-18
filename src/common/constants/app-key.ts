// 设备类型（常量 + 类型）
export const DeviceEnum = {
  Mobile: "mobile",
  Desktop: "desktop",
} as const;
export type DeviceEnum = (typeof DeviceEnum)[keyof typeof DeviceEnum];

// 布局模式（常量 + 类型）
export const LayoutModeEnum = {
  Left: "left",
  Top: "top",
  LeftTop: "left-top",
} as const;
export type LayoutModeEnum = (typeof LayoutModeEnum)[keyof typeof LayoutModeEnum];

// 侧边栏状态
export const SIDEBAR_OPENED = "opened" as const;
export const SIDEBAR_CLOSED = "closed" as const;

export type SidebarOpened = typeof SIDEBAR_OPENED;
export type SidebarClosed = typeof SIDEBAR_CLOSED;