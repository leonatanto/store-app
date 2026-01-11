/**
 * Global Type Definitions
 * Shared types used across multiple features
 */

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
}

export interface Address {
  name: string
  street: string
  city: string
  province: string
  postalCode: string
  phone: string
}

// Re-export feature types for convenience
export type { Product, ProductVariant } from '@/features/products'
export type { Order, OrderItem, OrderStatus } from '@/features/orders'
export type { Highlight } from '@/features/highlights'
