/**
 * Products API
 * Feature-specific API calls for products
 */

import { apiClient } from '@/lib/api'
import { Product } from '../types/product.types'

export const productsApi = {
  /**
   * Get all products
   */
  getProducts: async (params?: {
    category?: string
    search?: string
    page?: number
    limit?: number
  }) => {
    const queryParams = new URLSearchParams()
    if (params?.category) queryParams.append('category', params.category)
    if (params?.search) queryParams.append('search', params.search)
    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    
    const query = queryParams.toString()
    return apiClient.get<Product[]>(`/products${query ? `?${query}` : ''}`)
  },

  /**
   * Get product by ID
   */
  getProduct: async (id: string) => {
    return apiClient.get<Product>(`/products/${id}`)
  },

  /**
   * Get related products
   */
  getRelatedProducts: async (productId: string, limit = 4) => {
    return apiClient.get<Product[]>(`/products/${productId}/related?limit=${limit}`)
  },
}
