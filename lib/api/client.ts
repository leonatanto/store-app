/**
 * API Client Setup
 * Axios-based client with interceptors and error handling
 */

import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { ApiError } from './types'
import { storageHelpers } from '@/lib/storage/storage'
import { StorageKeys } from '@/lib/storage/keys'

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com'

/**
 * Create axios instance with default config
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Request interceptor
 * Adds auth token to requests and logs in dev mode
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get auth token from storage (MMKV is synchronous)
    const token = storageHelpers.getString(StorageKeys.AUTH_TOKEN)
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Log request in dev mode
    if (__DEV__) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
        params: config.params,
        data: config.data,
      })
    }
    
    return config
  },
  (error: AxiosError) => {
    if (__DEV__) {
      console.error('[API Request Error]', error)
    }
    return Promise.reject(error)
  }
)

/**
 * Response interceptor
 * Handles errors and token refresh
 */
axiosInstance.interceptors.response.use(
  (response) => {
    // Log response in dev mode
    if (__DEV__) {
      console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      })
    }
    return response
  },
  async (error: AxiosError<ApiError>) => {
    // Log error in dev mode
    if (__DEV__) {
      console.error('[API Response Error]', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.message,
        data: error.response?.data,
      })
    }
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean }
    
    // Handle 401 Unauthorized - token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        // Try to refresh token (MMKV is synchronous)
        const refreshToken = storageHelpers.getString(StorageKeys.REFRESH_TOKEN)
        
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          })
          
          const { token } = response.data
          storageHelpers.setString(StorageKeys.AUTH_TOKEN, token)
          
          // Retry original request with new token
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${token}`
          }
          
          return axiosInstance(originalRequest)
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        storageHelpers.delete(StorageKeys.AUTH_TOKEN)
        storageHelpers.delete(StorageKeys.REFRESH_TOKEN)
        // You can add navigation to login screen here
        return Promise.reject(refreshError)
      }
    }
    
    // Format error response
    const apiError: ApiError = {
      message: error.response?.data?.message || error.message || 'An error occurred',
      code: error.response?.data?.code,
      status: error.response?.status,
    }
    
    return Promise.reject(apiError)
  }
)

/**
 * API Client class
 * Wraps axios instance with type-safe methods
 */
class ApiClient {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  /**
   * GET request
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config)
    return response.data
  }

  /**
   * POST request
   */
  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config)
    return response.data
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T>(url, data, config)
    return response.data
  }

  /**
   * PATCH request
   */
  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.patch<T>(url, data, config)
    return response.data
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config)
    return response.data
  }

  /**
   * Get axios instance (for advanced usage)
   */
  getInstance(): AxiosInstance {
    return this.instance
  }
}

export const apiClient = new ApiClient(axiosInstance)
