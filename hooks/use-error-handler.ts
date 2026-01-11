/**
 * Error Handler Hook
 * Provides error handling utilities for components
 */

import { useCallback } from 'react'
import { Alert } from 'react-native'
import { getErrorMessage, isAuthError, isNetworkError, isServerError } from '@/lib/api'

export function useErrorHandler() {
  const handleError = useCallback((error: unknown, options?: { showAlert?: boolean }) => {
    const message = getErrorMessage(error)
    
    if (__DEV__) {
      console.error('Error:', error)
    }

    // Handle specific error types
    if (isAuthError(error)) {
      // Auth errors - redirect to login or show auth error
      if (options?.showAlert) {
        Alert.alert('Authentication Error', 'Please login again', [{ text: 'OK' }])
      }
      // You can add navigation to login here
      return
    }

    if (isNetworkError(error)) {
      // Network errors
      if (options?.showAlert) {
        Alert.alert('Connection Error', 'Please check your internet connection', [
          { text: 'OK' },
        ])
      }
      return
    }

    if (isServerError(error)) {
      // Server errors
      if (options?.showAlert) {
        Alert.alert('Server Error', 'Something went wrong on our end. Please try again later.', [
          { text: 'OK' },
        ])
      }
      return
    }

    // Generic errors
    if (options?.showAlert) {
      Alert.alert('Error', message, [{ text: 'OK' }])
    }
  }, [])

  return { handleError }
}
