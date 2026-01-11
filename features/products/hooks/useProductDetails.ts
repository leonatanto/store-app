/**
 * Product Details Hook
 * Fetch single product details
 */

import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/products.api'
import { queryKeys } from '@/lib/query/queryKeys'

export function useProductDetails(id: string) {
  return useQuery({
    queryKey: queryKeys.products.detail(id),
    queryFn: async () => {
      return productsApi.getProduct(id)
    },
    enabled: !!id,
  })
}
