/**
 * Button Atom
 * Basic button component with theme support
 */

import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
}: ButtonProps) {
  const { colors, spacing, borderRadius } = useTheme()
  
  const variantStyles = {
    primary: {
      backgroundColor: colors.primary,
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: colors.surface,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.border,
    },
  }
  
  const sizeStyles = {
    sm: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      fontSize: 14,
    },
    md: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      fontSize: 16,
    },
    lg: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      fontSize: 18,
    },
  }
  
  const textColor = variant === 'outline' ? colors.primary : colors.text
  
  return (
    <TouchableOpacity
      style={[
        {
          ...variantStyles[variant],
          ...sizeStyles[size],
          borderRadius: borderRadius.md,
          opacity: disabled || loading ? 0.5 : 1,
        },
        atoms.flexCenter,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[atoms.textMedium, { color: textColor }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}
