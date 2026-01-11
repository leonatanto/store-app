/**
 * React Query Error Boundary
 * Handles React Query errors with fallback UI
 */

import React from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from './ErrorBoundary'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from '@/components/atoms'

interface QueryErrorBoundaryProps {
  children: React.ReactNode
}

export function QueryErrorBoundary({ children }: QueryErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallback={
            <QueryErrorFallback
              onReset={reset}
              message="Failed to load data. Please try again."
            />
          }
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

interface QueryErrorFallbackProps {
  onReset: () => void
  message?: string
}

function QueryErrorFallback({ onReset, message }: QueryErrorFallbackProps) {
  const { colors } = useTheme()

  return (
    <View style={[atoms.flex1, atoms.flexCenter, { backgroundColor: colors.background }]}>
      <View style={[atoms.pLg, { maxWidth: 400, alignItems: 'center' }]}>
        <Text style={[atoms.textXl, atoms.textBold, { color: colors.text, marginBottom: 8 }]}>
          Failed to load
        </Text>
        <Text style={[atoms.textMd, { color: colors.textSecondary, marginBottom: 24, textAlign: 'center' }]}>
          {message || 'Something went wrong while loading data'}
        </Text>
        <TouchableOpacity
          style={[
            {
              backgroundColor: colors.primary,
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 8,
            },
            atoms.flexCenter,
          ]}
          onPress={onReset}
        >
          <Text style={[atoms.textMd, atoms.textBold, { color: '#fff' }]}>Retry</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
