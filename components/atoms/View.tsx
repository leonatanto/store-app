/**
 * View Atom
 * Themed view component
 */

import React from 'react'
import { View as RNView, ViewProps as RNViewProps, StyleSheet } from 'react-native'
import { useTheme } from '@/hooks/use-theme'

interface ViewProps extends RNViewProps {
  variant?: 'default' | 'card' | 'surface'
}

export function View({ variant = 'default', style, ...props }: ViewProps) {
  const { colors, borderRadius, shadow } = useTheme()
  
  const variantStyles = {
    default: {
      backgroundColor: colors.background,
    },
    card: {
      backgroundColor: colors.card,
      ...shadow.sm,
      borderRadius: borderRadius.md,
    },
    surface: {
      backgroundColor: colors.surface,
    },
  }
  
  return (
    <RNView
      style={[variantStyles[variant], style]}
      {...props}
    />
  )
}
