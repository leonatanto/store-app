# Image Caching Guide

## Overview

Optimized image caching using `expo-image` with memory and disk caching.

## CachedImage Component

Use `CachedImage` component for automatic caching:

```typescript
import { CachedImage } from '@/components/CachedImage'

<CachedImage
  uri="https://example.com/image.jpg"
  style={{ width: 200, height: 200 }}
  placeholder="https://example.com/placeholder.jpg"
  showLoading={true}
/>
```

## Direct expo-image Usage

For more control, use `expo-image` directly:

```typescript
import { Image } from 'expo-image'

<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  cachePolicy="memory-disk"
  contentFit="cover"
  transition={200}
/>
```

## Cache Policies

- `memory` - Only memory cache
- `disk` - Only disk cache
- `memory-disk` - Both (recommended)
- `none` - No caching

## Preload Images

Preload images for better performance:

```typescript
import { preloadImages } from '@/lib/image/cache'

// Preload product images
await preloadImages(productImages)
```

## Clear Cache

```typescript
import { clearImageCache } from '@/lib/image/cache'

// Clear all cached images
await clearImageCache()
```

## Best Practices

1. **Use CachedImage** - Automatic caching and loading states
2. **Preload critical images** - Load images before they're needed
3. **Use placeholders** - Show placeholder while loading
4. **Optimize image sizes** - Use appropriate image dimensions
5. **Clear cache when needed** - Clear cache on logout or settings

## Performance Tips

- Use `memory-disk` cache policy for best performance
- Preload images for product lists
- Use appropriate image sizes (not too large)
- Implement lazy loading for long lists
- Clear cache periodically if needed
