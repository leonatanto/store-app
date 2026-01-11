/**
 * Card Atom
 * Container component with shadow and rounded corners
 */

import React from 'react'
import { View, ViewProps, TouchableOpacity } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface CardProps extends ViewProps {
  variant?: 'default' | 'elevated' | 'outlined'
  onPress?: () => void
  children: React.ReactNode
}

export function Card({
  variant = 'default',
  onPress,
  children,
  style,
  ...props
}: CardProps) {
  const { colors, borderRadius, shadow } = useTheme()

  const variantStyles = {
    default: {
      backgroundColor: colors.card,
      ...shadow.sm,
      borderRadius: borderRadius.md,
    },
    elevated: {
      backgroundColor: colors.card,
      ...shadow.md,
      borderRadius: borderRadius.lg,
    },
    outlined: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.md,
    },
  }

  const cardStyle = [variantStyles[variant], style]

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyle}
        onPress={onPress}
        activeOpacity={0.7}
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  )
}
