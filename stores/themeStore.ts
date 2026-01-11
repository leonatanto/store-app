/**
 * Theme Store
 * Manages light/dark mode preference
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageHelpers } from '@/lib/storage/storage'
import { StorageKeys } from '@/lib/storage/keys'

export type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeState {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

// MMKV storage adapter for Zustand (synchronous)
const mmkvStorage = {
  getItem: (name: string): string | null => {
    return storageHelpers.getString(name) ?? null
  },
  setItem: (name: string, value: string): void => {
    storageHelpers.setString(name, value)
  },
  removeItem: (name: string): void => {
    storageHelpers.delete(name)
  },
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'system',
      setMode: (mode) => set({ mode }),
    }),
    {
      name: StorageKeys.THEME_MODE,
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
)
