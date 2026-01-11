/**
 * React Query Client Setup
 * Configured with persistence via MMKV
 */

import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { storage } from '../storage/mmkv'

// Create persister using MMKV
const persister = createSyncStoragePersister({
  storage: {
    getItem: (key: string) => {
      return storage.getString(key) ?? null
    },
    setItem: (key: string, value: string) => {
      storage.set(key, value)
    },
    removeItem: (key: string) => {
      storage.delete(key)
    },
  },
})

// Create query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      retry: (failureCount, error: unknown) => {
        // Don't retry on 4xx errors (client errors)
        if (
          typeof error === 'object' &&
          error !== null &&
          'status' in error &&
          typeof (error as { status: number }).status === 'number'
        ) {
          const status = (error as { status: number }).status
          if (status >= 400 && status < 500) {
            return false
          }
        }
        return failureCount < 3
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: false,
    },
  },
})

export { persister }
export { PersistQueryClientProvider }
