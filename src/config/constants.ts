// 应用常量配置
export const APP_CONFIG = {
  APP_NAME: 'React Vite Framework',
  APP_VERSION: '1.0.0',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
  TIMEOUT: 10000,
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  SETTINGS: '/settings',
} as const

export const THEME_CONFIG = {
  DEFAULT_THEME: 'light' as const,
  PRIMARY_COLOR: '#1677ff',
} as const
