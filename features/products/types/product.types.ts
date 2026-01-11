/**
 * Product Types
 * Feature-specific types for products
 */

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  variants?: ProductVariant[]
  inStock: boolean
  stockQuantity?: number
  rating?: number
  reviewCount?: number
  tags?: string[]
  createdAt?: string
  updatedAt?: string
}

export interface ProductVariant {
  id: string
  name: string
  type: 'size' | 'color' | 'material'
  value: string
  priceModifier?: number
  stockQuantity?: number
}

export interface ProductFilter {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  rating?: number
  tags?: string[]
}

export interface ProductSort {
  field: 'price' | 'name' | 'rating' | 'createdAt'
  order: 'asc' | 'desc'
}
