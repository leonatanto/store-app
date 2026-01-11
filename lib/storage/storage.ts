/**
 * Storage Setup
 * Uses MMKV for fast, synchronous storage
 * Requires development build (not Expo Go)
 */

import { createMMKV } from 'react-native-mmkv'
import { StorageKeys } from './keys'

export const storage = createMMKV({
  id: 'store-app-storage',
})

/**
 * Helper functions for type-safe storage
 * All operations are synchronous (MMKV API)
 */
export const storageHelpers = {
  getString: (key: string): string | undefined => {
    return storage.getString(key)
  },

  setString: (key: string, value: string): void => {
    storage.set(key, value)
  },

  getBoolean: (key: string): boolean | undefined => {
    return storage.getBoolean(key)
  },

  setBoolean: (key: string, value: boolean): void => {
    storage.set(key, value)
  },

  getNumber: (key: string): number | undefined => {
    return storage.getNumber(key)
  },

  setNumber: (key: string, value: number): void => {
    storage.set(key, value)
  },

  getObject: <T>(key: string): T | undefined => {
    const value = storage.getString(key)
    if (!value) return undefined
    try {
      return JSON.parse(value) as T
    } catch {
      return undefined
    }
  },

  setObject: <T>(key: string, value: T): void => {
    storage.set(key, JSON.stringify(value))
  },

  delete: (key: string): void => {
    storage.delete(key)
  },

  clearAll: (): void => {
    storage.clearAll()
  },
}
