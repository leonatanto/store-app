/**
 * Cached Image Component
 * Optimized image component with caching and placeholder
 */

import React from 'react'
import { Image, ImageProps } from 'expo-image'
import { View, ActivityIndicator } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from '@/components/atoms'

interface CachedImageProps extends Omit<ImageProps, 'source'> {
  uri: string
  placeholder?: string
  showLoading?: boolean
}

export function CachedImage({
  uri,
  placeholder,
  showLoading = true,
  style,
  ...props
}: CachedImageProps) {
  const { colors } = useTheme()
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <View style={style}>
      <Image
        source={{ uri }}
        placeholder={placeholder}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={[style, { opacity: isLoading ? 0.5 : 1 }]}
        {...props}
      />
      {showLoading && isLoading && (
        <View
          style={[
            atoms.flexCenter,
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colors.surface,
            },
          ]}
        >
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      )}
    </View>
  )
}
