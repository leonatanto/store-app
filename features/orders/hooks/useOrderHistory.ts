/**
 * Order History Hook
 * Fetch order history
 */

import { useQuery } from '@tanstack/react-query'
import { ordersApi } from '../api/orders.api'
import { queryKeys } from '@/lib/query/queryKeys'

export function useOrderHistory() {
  return useQuery({
    queryKey: queryKeys.orders.list(),
    queryFn: async () => {
      return ordersApi.getOrders()
    },
  })
}

export function useOrderDetails(id: string) {
  return useQuery({
    queryKey: queryKeys.orders.detail(id),
    queryFn: async () => {
      return ordersApi.getOrder(id)
    },
    enabled: !!id,
  })
}
