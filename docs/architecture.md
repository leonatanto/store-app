# Architecture

## Overview

This app follows a **feature-based architecture** with clear separation between:
- **Global concerns**: Theme, auth, cart (shared across features)
- **Feature modules**: Self-contained feature logic
- **Shared components**: Reusable UI components
- **Infrastructure**: API, storage, utilities

## Folder Structure

```
app/                          # Expo Router screens (file-based routing)
  (tabs)/                     # Tab navigation screens
    index.tsx                 # Home/Catalog
    highlights.tsx            # Instagram-style highlights
    cart.tsx                  # Shopping cart
    profile.tsx               # User profile
  product/
    [id].tsx                  # Product details (dynamic route)
  checkout/
    index.tsx                 # Checkout flow
  orders/
    index.tsx                # Order history
    [id].tsx                  # Order details (dynamic route)

components/                   # Shared UI components
  atoms/                      # Atomic design - basic primitives
    Button.tsx
    Text.tsx
    View.tsx
    Input.tsx
    index.ts                  # Export all atoms
  molecules/                  # Atomic design - composite components
    ProductCard.tsx           # Product card (atoms combined)
    CartItem.tsx              # Cart item component
    HighlightStory.tsx        # Story/highlight component
    index.ts
  organisms/                  # Atomic design - complex components
    ProductGrid.tsx           # Product grid with logic
    CheckoutForm.tsx          # Complete checkout form
    OrderList.tsx             # Order list with filtering
    index.ts
  ui/                         # Third-party or complex UI components
    icon-symbol.tsx
    collapsible.tsx

features/                     # Feature-based modules (self-contained)
  products/
    api/                      # Feature-specific API calls
      products.api.ts
    components/               # Feature-specific components
      ProductImageGallery.tsx
      ProductVariants.tsx
    hooks/                    # Feature-specific hooks
      useProductDetails.ts
      useProductList.ts
    types/                    # Feature-specific types
      product.types.ts
    index.ts                  # Public API exports
  cart/
    api/
      cart.api.ts
    components/
      CartSummary.tsx
      CartItemList.tsx
    hooks/
      useCartOperations.ts
    types/
      cart.types.ts
    index.ts
  orders/
    api/
      orders.api.ts
    components/
      OrderCard.tsx
      OrderStatusBadge.tsx
    hooks/
      useOrderHistory.ts
      useOrderTracking.ts
    types/
      order.types.ts
    index.ts
  highlights/
    api/
      highlights.api.ts
    components/
      HighlightViewer.tsx
      HighlightStory.tsx
    hooks/
      useHighlights.ts
    types/
      highlight.types.ts
    index.ts

lib/                          # Infrastructure & utilities
  api/
    client.ts                 # Base API client with interceptors
    errors.ts                 # Error handling utilities
    types.ts                  # API response types
  storage/
    mmkv.ts                   # MMKV storage setup
    keys.ts                   # Storage keys constants
  query/
    queryClient.ts            # React Query setup
  utils/                      # Shared utilities
    formatPrice.ts
    formatDate.ts
    validation.ts
  constants/                  # App-wide constants (if not feature-specific)
    routes.ts

stores/                       # Global Zustand stores (shared state)
  cartStore.ts                # Cart state (global)
  themeStore.ts               # Theme state (global)
  authStore.ts                # Auth state (global)

hooks/                        # Global/shared hooks
  use-theme.ts                # Theme hook (uses themeStore)
  use-color-scheme.ts         # System color scheme
  use-cart.ts                 # Cart hook (uses cartStore)

constants/                     # App configuration
  theme.ts                    # Theme tokens
  brand.ts                    # Brand configuration
  api.ts                      # API endpoints constants

types/                        # Global/shared types
  index.ts                    # Shared types (User, Address, etc.)
```

## Architecture Principles

### 1. Feature-Based Organization
Each feature is self-contained:
- Own API calls
- Own components
- Own hooks
- Own types
- Public API via `index.ts`

**Benefits:**
- Easy to find related code
- Easy to remove/disable features
- Clear boundaries
- Better testability

### 2. Separation of Concerns

**Global State (stores/)**
- Cart: Shared across app
- Theme: App-wide theming
- Auth: User authentication

**Feature State**
- Managed via React Query (server state)
- Local UI state in components
- Feature-specific stores if needed

**Components Hierarchy**
- **Atoms**: Basic building blocks (Button, Text, View)
- **Molecules**: Composed atoms (ProductCard, CartItem)
- **Organisms**: Complex components with logic (ProductGrid, CheckoutForm)
- **Screens**: Full page views (in `app/`)

### 3. Data Flow

```
User Action
  ↓
Component
  ↓
Hook (useProducts, useCart, etc.)
  ↓
API Client / Store
  ↓
React Query / Zustand
  ↓
MMKV (persistence)
  ↓
UI Update
```

### 4. API Organization

**Base Client** (`lib/api/client.ts`)
- Handles authentication
- Error handling
- Request/response interceptors

**Feature APIs** (`features/[feature]/api/`)
- Feature-specific endpoints
- Type-safe requests
- Reusable queries

**Example:**
```typescript
// features/products/api/products.api.ts
export const productsApi = {
  getProducts: () => apiClient.get<Product[]>('/products'),
  getProduct: (id: string) => apiClient.get<Product>(`/products/${id}`),
}
```

### 5. Hooks Organization

**Global Hooks** (`hooks/`)
- `use-theme.ts` - Theme access
- `use-cart.ts` - Cart operations
- `use-color-scheme.ts` - System theme

**Feature Hooks** (`features/[feature]/hooks/`)
- Feature-specific data fetching
- Feature-specific logic
- Use feature API modules

**Example:**
```typescript
// features/products/hooks/useProductDetails.ts
export function useProductDetails(id: string) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => productsApi.getProduct(id),
  })
}
```

### 6. Type Organization

**Global Types** (`types/index.ts`)
- User, Address, common types
- Shared across features

**Feature Types** (`features/[feature]/types/`)
- Feature-specific types
- Not shared outside feature

## Import Rules

### Within Feature
```typescript
// features/products/components/ProductCard.tsx
import { useProductDetails } from '../hooks/useProductDetails'
import { Product } from '../types/product.types'
```

### Cross-Feature
```typescript
// features/cart/components/CartItem.tsx
import { Product } from '@/features/products/types/product.types'
import { useCartStore } from '@/stores/cartStore'
```

### Shared Components
```typescript
// features/products/components/ProductCard.tsx
import { Button, Text } from '@/components/atoms'
import { ProductCard } from '@/components/molecules'
```

## Best Practices

1. **Feature Independence**: Features should not directly import from other features
2. **Shared Code**: Use `lib/` for utilities, `components/` for UI
3. **Type Safety**: Export types from feature `index.ts` if needed elsewhere
4. **API Calls**: Always go through feature API modules
5. **State Management**: 
   - Server state → React Query
   - Global UI state → Zustand stores
   - Local UI state → useState
6. **Component Reusability**: Start with atoms, compose into molecules/organisms

## Migration Path

When adding new features:
1. Create `features/[feature-name]/` folder
2. Add `api/`, `components/`, `hooks/`, `types/` subfolders
3. Create `index.ts` for public exports
4. Keep feature self-contained
5. Only export what's needed elsewhere
