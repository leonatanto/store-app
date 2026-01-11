/**
 * Storage Keys
 * Centralized storage key constants
 */

export const StorageKeys = {
  // Auth
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  
  // Cart
  CART: 'cart',
  
  // Preferences
  THEME_MODE: 'theme_mode',
  USER_PREFERENCES: 'user_preferences',
  RECENT_SEARCHES: 'recent_searches',
  
  // React Query
  QUERY_CACHE: 'query_cache',
} as const

export type StorageKey = typeof StorageKeys[keyof typeof StorageKeys]
