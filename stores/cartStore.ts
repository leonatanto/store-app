/**
 * Cart Store
 * Manages shopping cart state
 */

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { storageHelpers } from '@/lib/storage/mmkv'
import { StorageKeys } from '@/lib/storage/keys'

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image?: string
  variant?: {
    size?: string
    color?: string
  }
}

interface CartState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

const mmkvStorage = {
  getItem: (name: string): string | null => {
    return storageHelpers.getString(name) ?? null
  },
  setItem: (name: string, value: string): void => {
    storageHelpers.setString(name, value)
  },
  removeItem: (name: string): void => {
    storageHelpers.delete(name)
  },
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const existingItem = get().items.find(
          (i) => i.id === item.id
        )
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          }))
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity || 1 }],
          }))
        }
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },
      
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }))
      },
      
      clearCart: () => {
        set({ items: [] })
      },
      
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: StorageKeys.CART,
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
)
