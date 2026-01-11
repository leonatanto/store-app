/**
 * Query Keys Factory
 * Centralized query keys for type-safe query invalidation
 */

export const queryKeys = {
  products: {
    all: ['products'] as const,
    lists: () => [...queryKeys.products.all, 'list'] as const,
    list: (params?: unknown) => [...queryKeys.products.lists(), params] as const,
    details: () => [...queryKeys.products.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.products.details(), id] as const,
    related: (productId: string) => [...queryKeys.products.all, 'related', productId] as const,
  },
  orders: {
    all: ['orders'] as const,
    lists: () => [...queryKeys.orders.all, 'list'] as const,
    list: () => [...queryKeys.orders.lists()] as const,
    details: () => [...queryKeys.orders.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.orders.details(), id] as const,
  },
  highlights: {
    all: ['highlights'] as const,
    lists: () => [...queryKeys.highlights.all, 'list'] as const,
    list: () => [...queryKeys.highlights.lists()] as const,
    details: () => [...queryKeys.highlights.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.highlights.details(), id] as const,
  },
} as const
