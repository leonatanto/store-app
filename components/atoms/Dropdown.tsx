/**
 * Dropdown Atom
 * Modern dropdown using bottom sheet
 */

import React, { useRef, useState } from 'react'
import { TouchableOpacity, View, ScrollView } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from './index'
import { Text } from './Text'
import { AppBottomSheet, BottomSheetRef } from '@/components/BottomSheet'
import { IconSymbol } from '@/components/ui/icon-symbol'

export interface DropdownOption {
  label: string
  value: string
  disabled?: boolean
}

interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onSelect: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
}

export function Dropdown({
  options,
  value,
  onSelect,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
}: DropdownProps) {
  const { colors, spacing, borderRadius } = useTheme()
  const bottomSheetRef = useRef<BottomSheetRef>(null)
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find((opt) => opt.value === value)

  const handleSelect = (optionValue: string) => {
    onSelect(optionValue)
    bottomSheetRef.current?.dismiss()
    setIsOpen(false)
  }

  const handleOpen = () => {
    if (!disabled) {
      bottomSheetRef.current?.present()
      setIsOpen(true)
    }
  }

  return (
    <>
      <View>
        {label && (
          <Text
            size="sm"
            weight="medium"
            color="text"
            style={{ marginBottom: spacing.xs }}
          >
            {label}
          </Text>
        )}
        <TouchableOpacity
          onPress={handleOpen}
          disabled={disabled}
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: disabled ? colors.surface : colors.card,
              borderWidth: 1,
              borderColor: error ? colors.error : colors.border,
              borderRadius: borderRadius.md,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.sm,
              minHeight: 48,
              opacity: disabled ? 0.5 : 1,
            },
          ]}
        >
          <Text
            size="md"
            color={selectedOption ? 'text' : 'textTertiary'}
            style={{ flex: 1 }}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <IconSymbol
            name="chevron.down"
            size={20}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
        {error && (
          <Text
            size="xs"
            color="text"
            style={{
              color: colors.error,
              marginTop: spacing.xs,
            }}
          >
            {error}
          </Text>
        )}
      </View>

      <AppBottomSheet
        ref={bottomSheetRef}
        snapPoints={['50%', '75%']}
        onClose={() => setIsOpen(false)}
      >
        <View style={[atoms.flex1, { backgroundColor: colors.card }]}>
          <View
            style={[
              {
                paddingHorizontal: spacing.md,
                paddingVertical: spacing.md,
                borderBottomWidth: 1,
                borderBottomColor: colors.border,
              },
              atoms.flexBetween,
            ]}
          >
            <Text size="lg" weight="bold" color="text">
              {label || 'Select an option'}
            </Text>
            <TouchableOpacity onPress={() => bottomSheetRef.current?.dismiss()}>
              <IconSymbol name="xmark" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          <ScrollView style={[atoms.flex1]}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => !option.disabled && handleSelect(option.value)}
                disabled={option.disabled}
                style={[
                  {
                    paddingHorizontal: spacing.md,
                    paddingVertical: spacing.md,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.borderLight,
                    opacity: option.disabled ? 0.5 : 1,
                    backgroundColor:
                      option.value === value ? colors.surface : 'transparent',
                  },
                ]}
              >
                <View style={[atoms.flexBetween]}>
                  <Text
                    size="md"
                    color={option.value === value ? 'primary' : 'text'}
                    weight={option.value === value ? 'medium' : 'normal'}
                  >
                    {option.label}
                  </Text>
                  {option.value === value && (
                    <IconSymbol
                      name="checkmark"
                      size={20}
                      color={colors.primary}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </AppBottomSheet>
    </>
  )
}
