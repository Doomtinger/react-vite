import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  role: string
}

interface UserState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setToken: (token: string | null) => void
  logout: () => void
}

/**
 * 用户状态管理 Store
 */
export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        setUser: (user) =>
          set({ user, isAuthenticated: !!user }),
        setToken: (token) => set({ token }),
        logout: () => set({ user: null, token: null, isAuthenticated: false }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
)
