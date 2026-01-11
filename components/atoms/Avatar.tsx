/**
 * Avatar Atom
 * Circular image component with fallback
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface AvatarProps {
  uri?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fallbackColor?: string
}

export function Avatar({
  uri,
  name,
  size = 'md',
  fallbackColor,
}: AvatarProps) {
  const { colors, borderRadius } = useTheme()

  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  }

  const fontSizeMap = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 18,
    xl: 24,
  }

  const avatarSize = sizeMap[size]
  const fontSize = fontSizeMap[size]

  const getInitials = (name?: string): string => {
    if (!name) return '?'
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    }
    return name[0].toUpperCase()
  }

  const backgroundColor = fallbackColor || colors.primary

  return (
    <View
      style={[
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          backgroundColor,
          overflow: 'hidden',
        },
        atoms.flexCenter,
      ]}
    >
      {uri ? (
        <Image
          source={{ uri }}
          style={{ width: avatarSize, height: avatarSize }}
          contentFit="cover"
          cachePolicy="memory-disk"
        />
      ) : (
        <Text
          style={[
            {
              fontSize,
              color: '#ffffff',
              fontWeight: '600',
            },
          ]}
        >
          {getInitials(name)}
        </Text>
      )}
    </View>
  )
}
