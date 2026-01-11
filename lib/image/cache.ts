/**
 * Image Cache Configuration
 * Optimized image caching for performance
 */

import { Image } from 'expo-image'

// Configure image cache
const imageCachePolicy = {
  // Cache images for 7 days
  maxAge: 7 * 24 * 60 * 60 * 1000,
  // Maximum cache size: 100MB
  maxSize: 100 * 1024 * 1024,
}

/**
 * Preload images for better performance
 */
export async function preloadImages(urls: string[]) {
  const promises = urls.map((url) => Image.prefetch(url, { cachePolicy: 'memory-disk' }))
  await Promise.allSettled(promises)
}

/**
 * Clear image cache
 */
export async function clearImageCache() {
  await Image.clearMemoryCache()
  await Image.clearDiskCache()
}

/**
 * Get cache size (approximate)
 */
export async function getCacheSize(): Promise<number> {
  // Note: expo-image doesn't provide direct cache size API
  // This is a placeholder for future implementation
  return 0
}

/**
 * Image component with optimized caching
 */
export const CachedImage = Image
