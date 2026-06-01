import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface AppState {
  // 应用全局状态
  loading: boolean
  collapsed: boolean
  theme: 'light' | 'dark'
  language: 'zh-CN' | 'en-US'

  // Actions
  setLoading: (loading: boolean) => void
  setCollapsed: (collapsed: boolean) => void
  setTheme: (theme: 'light' | 'dark') => void
  setLanguage: (language: 'zh-CN' | 'en-US') => void
  toggleCollapsed: () => void
  toggleTheme: () => void
}

/**
 * 应用全局状态管理 Store
 */
export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      // 初始状态
      loading: false,
      collapsed: false,
      theme: 'light',
      language: 'zh-CN',

      // Actions
      setLoading: (loading) => set({ loading }),
      setCollapsed: (collapsed) => set({ collapsed }),
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'app-store' }
  )
)
