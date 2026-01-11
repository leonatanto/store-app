# API Layer Documentation

## Overview

The API layer uses Axios with a clean, layered architecture:

```
lib/api/
  client.ts        # Axios instance with interceptors (auth, logging, error handling)
  errors.ts       # Error handling utilities
  types.ts        # API types
  index.ts        # Main exports
```

## Usage

### Basic API Call

```typescript
import { apiClient } from '@/lib/api'

// GET request
const products = await apiClient.get<Product[]>('/products')

// POST request
const order = await apiClient.post<Order>('/orders', orderData)

// PUT request
const updated = await apiClient.put<Product>('/products/1', productData)

// DELETE request
await apiClient.delete('/products/1')
```

### Feature API Module

```typescript
// features/products/api/products.api.ts
import { apiClient } from '@/lib/api'
import { Product } from '../types/product.types'

export const productsApi = {
  getProducts: () => apiClient.get<Product[]>('/products'),
  getProduct: (id: string) => apiClient.get<Product>(`/products/${id}`),
}
```

### Error Handling

```typescript
import { getErrorMessage, isAuthError, isNetworkError } from '@/lib/api'

try {
  const products = await productsApi.getProducts()
} catch (error) {
  if (isAuthError(error)) {
    // Handle auth error
  } else if (isNetworkError(error)) {
    // Handle network error
  } else {
    // Handle other errors
    console.error(getErrorMessage(error))
  }
}
```

## Features

### Automatic Auth Token
- Token is automatically added from storage
- Token refresh on 401 errors
- Automatic retry after refresh

### Error Handling
- Centralized error formatting
- Type-safe error handling
- Network error detection
- Auth error detection

### Development Logging
- Request/response logging in dev mode
- Error logging with details
- Disabled in production

### Timeout
- Default 30 seconds timeout
- Configurable per request

## Interceptors

### Request Interceptor
- Adds auth token automatically
- Logs requests in dev mode

### Response Interceptor
- Handles 401 errors (token refresh)
- Formats error responses
- Logs responses in dev mode
