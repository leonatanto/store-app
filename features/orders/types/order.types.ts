/**
 * Order Types
 * Feature-specific types for orders
 */

export interface Order {
  id: string
  orderNumber: string
  items: OrderItem[]
  status: OrderStatus
  total: number
  subtotal: number
  shipping: number
  tax?: number
  shippingAddress: Address
  paymentMethod: string
  createdAt: string
  updatedAt: string
  estimatedDelivery?: string
  trackingNumber?: string
}

export interface OrderItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image?: string
  variant?: Record<string, string>
}

export type OrderStatus = 
  | 'pending' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled'

export interface Address {
  name: string
  street: string
  city: string
  province: string
  postalCode: string
  phone: string
}
