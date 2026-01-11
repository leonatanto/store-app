# API Integration

## Overview
The app uses **Axios** for HTTP requests with a clean, layered architecture.

## Architecture

```
lib/api/
  client.ts        # Axios instance with interceptors (auth, logging, error handling)
  errors.ts       # Error handling utilities
  types.ts        # API types
  index.ts        # Main exports
```

## Setup
API client is configured in `lib/api/client.ts` and automatically initialized in `app/_layout.tsx`.

## API Client Features

### Automatic Auth Token
- Token automatically added from storage
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

## Usage

### Basic API Call

```typescript
import { apiClient } from '@/lib/api'

// GET request
const products = await apiClient.get<Product[]>('/products')

// POST request
const order = await apiClient.post<Order>('/orders', orderData)
```

### Feature API Module

```typescript
// features/products/api/products.api.ts
import { apiClient } from '@/lib/api'

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
    console.error(getErrorMessage(error))
  }
}
```

## Endpoints Structure
```typescript
/products          # Get all products
/products/:id      # Get product details
/cart              # Cart operations
/orders            # Order history
/highlights        # Get highlights/stories
```

## Authentication
- Tokens stored in MMKV
- Automatic token refresh on 401
- Auth errors handled gracefully
- Redirect to login on refresh failure

## React Query Integration
React Query handles:
- Caching
- Refetching
- Error boundaries
- Loading states

API client handles:
- HTTP requests
- Auth tokens
- Error formatting
- Request/response interceptors
