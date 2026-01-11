/**
 * Button Atom
 * Basic button component with theme support
 */

import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
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
    ghost: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    danger: {
      backgroundColor: colors.error,
      borderWidth: 0,
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
  
  const getTextColor = () => {
    if (variant === 'outline' || variant === 'ghost') {
      return colors.primary
    }
    if (variant === 'danger') {
      return '#ffffff'
    }
    if (variant === 'secondary') {
      return colors.text
    }
    return '#ffffff'
  }

  const textColor = getTextColor()
  
  return (
    <TouchableOpacity
      style={[
        {
          ...variantStyles[variant],
          ...sizeStyles[size],
          borderRadius: borderRadius.md,
          opacity: disabled || loading ? 0.5 : 1,
          width: fullWidth ? '100%' : 'auto',
        },
        atoms.flexCenter,
        atoms.flexRow,
        { gap: spacing.xs },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          {leftIcon && <View>{leftIcon}</View>}
          <Text style={[atoms.textMedium, { color: textColor }]}>
            {title}
          </Text>
          {rightIcon && <View>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  )
}
