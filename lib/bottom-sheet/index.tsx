/**
 * Bottom Sheet Setup
 * Configured bottom sheet provider and utilities
 * Falls back gracefully in Expo Go
 */

import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

// Try to import bottom sheet provider (only works in development build)
let BottomSheetModalProvider: any = null

try {
  const bottomSheetModule = require('@gorhom/bottom-sheet')
  BottomSheetModalProvider = bottomSheetModule.BottomSheetModalProvider
} catch (error) {
  // Bottom sheet not available (Expo Go)
  // Will use Modal fallback in BottomSheet component
}

interface BottomSheetProviderProps {
  children: React.ReactNode
}

export function BottomSheetProvider({ children }: BottomSheetProviderProps) {
  // If bottom sheet is available, use it
  if (BottomSheetModalProvider) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </GestureHandlerRootView>
    )
  }

  // Fallback for Expo Go (just wrap with GestureHandlerRootView)
  return <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
}
