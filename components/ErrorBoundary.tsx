/**
 * Error Boundary Component
 * Catches React errors and displays fallback UI
 */

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '@/hooks/use-theme'
import { atoms } from '@/components/atoms'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service
    if (__DEV__) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return <ErrorFallback error={this.state.error} onReset={this.handleReset} />
    }

    return this.props.children
  }
}

interface ErrorFallbackProps {
  error: Error | null
  onReset: () => void
}

function ErrorFallback({ error, onReset }: ErrorFallbackProps) {
  const { colors } = useTheme()

  return (
    <View style={[atoms.flex1, atoms.flexCenter, { backgroundColor: colors.background }]}>
      <View style={[atoms.pLg, { maxWidth: 400 }]}>
        <Text style={[atoms.textXxl, atoms.textBold, { color: colors.text, marginBottom: 8 }]}>
          Something went wrong
        </Text>
        <Text style={[atoms.textMd, { color: colors.textSecondary, marginBottom: 24 }]}>
          {error?.message || 'An unexpected error occurred'}
        </Text>
        {__DEV__ && error && (
          <Text
            style={[
              atoms.textSm,
              { color: colors.textTertiary, marginBottom: 24, fontFamily: 'monospace' },
            ]}
          >
            {error.stack}
          </Text>
        )}
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
          <Text style={[atoms.textMd, atoms.textBold, { color: '#fff' }]}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
