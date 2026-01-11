/**
 * Orders API
 * Feature-specific API calls for orders
 */

import { apiClient } from '@/lib/api'
import { Order } from '../types/order.types'

export const ordersApi = {
  /**
   * Get all orders
   */
  getOrders: async () => {
    return apiClient.get<Order[]>('/orders')
  },

  /**
   * Get order by ID
   */
  getOrder: async (id: string) => {
    return apiClient.get<Order>(`/orders/${id}`)
  },

  /**
   * Create order
   */
  createOrder: async (orderData: {
    items: Array<{
      productId: string
      quantity: number
      variant?: Record<string, string>
    }>
    shippingAddress: {
      name: string
      street: string
      city: string
      province: string
      postalCode: string
      phone: string
    }
    paymentMethod: string
  }) => {
    return apiClient.post<Order>('/orders', orderData)
  },

  /**
   * Cancel order
   */
  cancelOrder: async (id: string) => {
    return apiClient.post<Order>(`/orders/${id}/cancel`)
  },
}
