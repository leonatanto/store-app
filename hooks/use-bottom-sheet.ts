/**
 * Bottom Sheet Hook
 * Easy-to-use hook for bottom sheet operations
 */

import { useRef, useCallback } from 'react'
import { BottomSheetRef } from '@/components/BottomSheet'

export function useBottomSheet() {
  const bottomSheetRef = useRef<BottomSheetRef>(null)

  const present = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  const dismiss = useCallback(() => {
    bottomSheetRef.current?.dismiss()
  }, [])

  const close = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  return {
    ref: bottomSheetRef,
    present,
    dismiss,
    close,
  }
}
