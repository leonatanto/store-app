/**
 * API Error Handling
 * Centralized error handling utilities
 */

import { ApiError } from './types'

/**
 * Check if error is API error
 */
export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as ApiError).message === 'string'
  )
}

/**
 * Get user-friendly error message
 */
export function getErrorMessage(error: unknown): string {
  if (isApiError(error)) {
    return error.message
  }
  
  if (error instanceof Error) {
    return error.message
  }
  
  return 'An unexpected error occurred'
}

/**
 * Get error status code
 */
export function getErrorStatus(error: unknown): number | undefined {
  if (isApiError(error)) {
    return error.status
  }
  
  return undefined
}

/**
 * Check if error is network error
 */
export function isNetworkError(error: unknown): boolean {
  if (isApiError(error)) {
    return error.status === undefined || error.status === 0
  }
  
  return false
}

/**
 * Check if error is authentication error
 */
export function isAuthError(error: unknown): boolean {
  if (isApiError(error)) {
    return error.status === 401 || error.status === 403
  }
  
  return false
}

/**
 * Check if error is server error
 */
export function isServerError(error: unknown): boolean {
  if (isApiError(error)) {
    return error.status !== undefined && error.status >= 500
  }
  
  return false
}
