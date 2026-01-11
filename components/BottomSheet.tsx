/**
 * Bottom Sheet Component
 * Reusable bottom sheet with theme support
 * Falls back to Modal in Expo Go
 */

import React, { useCallback, useImperativeHandle, forwardRef, useState } from 'react'
import { Modal, TouchableOpacity, View as RNView } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from '@/components/atoms'

// Try to import bottom sheet (only works in development build)
let BottomSheetComponent: any = null
let BottomSheetBackdrop: any = null
let BottomSheetView: any = null

try {
  const bottomSheetModule = require('@gorhom/bottom-sheet')
  BottomSheetComponent = bottomSheetModule.default
  BottomSheetBackdrop = bottomSheetModule.BottomSheetBackdrop
  BottomSheetView = bottomSheetModule.BottomSheetView
} catch (error) {
  // Bottom sheet not available (Expo Go)
  if (__DEV__) {
    console.warn(
      'Bottom sheet not available. Using Modal fallback. Run "expo prebuild" for full bottom sheet support.'
    )
  }
}

export interface BottomSheetRef {
  present: () => void
  dismiss: () => void
  close: () => void
}

interface BottomSheetProps {
  children: React.ReactNode
  snapPoints?: (string | number)[]
  enablePanDownToClose?: boolean
  onClose?: () => void
}

export const AppBottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({ children, snapPoints = ['50%'], enablePanDownToClose = true, onClose }, ref) => {
    const { colors } = useTheme()
    const [isVisible, setIsVisible] = useState(false)
    const bottomSheetRef = React.useRef<any>(null)

    // Use native bottom sheet if available
    const useNativeBottomSheet = BottomSheetComponent !== null

    useImperativeHandle(ref, () => ({
      present: () => {
        if (useNativeBottomSheet) {
          bottomSheetRef.current?.expand()
        } else {
          setIsVisible(true)
        }
      },
      dismiss: () => {
        if (useNativeBottomSheet) {
          bottomSheetRef.current?.close()
        } else {
          setIsVisible(false)
          onClose?.()
        }
      },
      close: () => {
        if (useNativeBottomSheet) {
          bottomSheetRef.current?.close()
        } else {
          setIsVisible(false)
          onClose?.()
        }
      },
    }))

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1 && onClose) {
          onClose()
        }
      },
      [onClose]
    )

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
        />
      ),
      []
    )

    // Fallback to Modal for Expo Go
    if (!useNativeBottomSheet) {
      return (
        <Modal
          visible={isVisible}
          transparent
          animationType="slide"
          onRequestClose={() => {
            setIsVisible(false)
            onClose?.()
          }}
        >
          <TouchableOpacity
            style={[atoms.flex1, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
            activeOpacity={1}
            onPress={() => {
              if (enablePanDownToClose) {
                setIsVisible(false)
                onClose?.()
              }
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
              style={[
                atoms.flex1,
                atoms.justifyEnd,
                {
                  backgroundColor: colors.card,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  maxHeight: '90%',
                },
              ]}
            >
              <RNView style={[atoms.flex1, { backgroundColor: colors.card }]}>
                {children}
              </RNView>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      )
    }

    // Native bottom sheet (development build)
    return (
      <BottomSheetComponent
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={enablePanDownToClose}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: colors.card }}
        handleIndicatorStyle={{ backgroundColor: colors.border }}
      >
        <BottomSheetView style={[atoms.flex1, { backgroundColor: colors.card }]}>
          {children}
        </BottomSheetView>
      </BottomSheetComponent>
    )
  }
)

AppBottomSheet.displayName = 'AppBottomSheet'
