/**
 * TextInput Atom
 * Themed text input with label and error state
 */

import React from 'react'
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
} from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'

interface TextInputProps extends RNTextInputProps {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      style,
      ...props
    },
    ref
  ) => {
    const { colors, spacing, borderRadius, typography } = useTheme()

    return (
      <View>
        {label && (
          <Text
            style={[
              atoms.textSm,
              atoms.textMedium,
              { color: colors.text, marginBottom: spacing.xs },
            ]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: error ? colors.error : colors.border,
              borderRadius: borderRadius.md,
              paddingHorizontal: spacing.md,
              minHeight: 48,
            },
          ]}
        >
          {leftIcon && (
            <View style={{ marginRight: spacing.sm }}>{leftIcon}</View>
          )}
          <RNTextInput
            ref={ref}
            style={[
              atoms.flex1,
              {
                fontSize: typography.fontSize.md,
                color: colors.text,
                paddingVertical: spacing.sm,
              },
            ]}
            placeholderTextColor={colors.textTertiary}
            {...props}
          />
          {rightIcon && (
            <View style={{ marginLeft: spacing.sm }}>{rightIcon}</View>
          )}
        </View>
        {(error || helperText) && (
          <Text
            style={[
              atoms.textXs,
              {
                color: error ? colors.error : colors.textSecondary,
                marginTop: spacing.xs,
              },
            ]}
          >
            {error || helperText}
          </Text>
        )}
      </View>
    )
  }
)

TextInput.displayName = 'TextInput'
