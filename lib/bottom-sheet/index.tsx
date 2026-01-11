/**
 * Bottom Sheet Setup
 * Configured bottom sheet provider and utilities
 */

import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

interface BottomSheetProviderProps {
  children: React.ReactNode
}

export function BottomSheetProvider({ children }: BottomSheetProviderProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
