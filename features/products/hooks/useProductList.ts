/**
 * Product List Hook
 * Fetch and manage product list
 */

import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/products.api'
import { ProductFilter, ProductSort } from '../types/product.types'
import { queryKeys } from '@/lib/query/queryKeys'

interface UseProductListParams {
  filter?: ProductFilter
  sort?: ProductSort
  page?: number
  limit?: number
}

export function useProductList(params?: UseProductListParams) {
  return useQuery({
    queryKey: queryKeys.products.list(params),
    queryFn: async () => {
      return productsApi.getProducts({
        category: params?.filter?.category,
        search: params?.filter?.category, // Adjust based on your API
        page: params?.page,
        limit: params?.limit,
      })
    },
  })
}
