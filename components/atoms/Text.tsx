/**
 * Text Atom
 * Themed text component
 */

import React from 'react'
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface TextProps extends RNTextProps {
  variant?: 'body' | 'heading' | 'caption' | 'label'
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'text' | 'textSecondary' | 'textTertiary' | 'primary'
}

export function Text({
  variant = 'body',
  size = 'md',
  weight = 'normal',
  color = 'text',
  style,
  ...props
}: TextProps) {
  const { colors } = useTheme()
  
  const sizeAtoms = {
    xxs: atoms.textXxs,
    xs: atoms.textXs,
    sm: atoms.textSm,
    md: atoms.textMd,
    lg: atoms.textLg,
    xl: atoms.textXl,
    xxl: atoms.textXxl,
  }
  
  const weightAtoms = {
    normal: atoms.textNormal,
    medium: atoms.textMedium,
    semibold: {},
    bold: atoms.textBold,
  }
  
  const colorMap = {
    text: colors.text,
    textSecondary: colors.textSecondary,
    textTertiary: colors.textTertiary,
    primary: colors.primary,
  }
  
  return (
    <RNText
      style={[
        sizeAtoms[size],
        weightAtoms[weight],
        { color: colorMap[color] },
        style,
      ]}
      {...props}
    />
  )
}
