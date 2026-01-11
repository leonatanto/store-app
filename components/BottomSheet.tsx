/**
 * Bottom Sheet Component
 * Reusable bottom sheet with theme support
 */

import React, { useCallback, useImperativeHandle, forwardRef } from 'react'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetModal,
} from '@gorhom/bottom-sheet'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from '@/components/atoms'

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
    const bottomSheetRef = React.useRef<BottomSheet>(null)

    useImperativeHandle(ref, () => ({
      present: () => bottomSheetRef.current?.expand(),
      dismiss: () => bottomSheetRef.current?.close(),
      close: () => bottomSheetRef.current?.close(),
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

    return (
      <BottomSheet
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
      </BottomSheet>
    )
  }
)

AppBottomSheet.displayName = 'AppBottomSheet'
