# API Organization Best Practices

## Current Structure

```
features/
  products/
    api/
      products.api.ts    # Feature API
  orders/
    api/
      orders.api.ts
```

## Analysis

### ✅ Good
- Feature-based organization
- Co-located with feature code
- Type-safe
- Easy to find

### ⚠️ Issues
1. **Hardcoded endpoints** - Not using `constants/api.ts`
2. **Folder overhead** - `api/` folder for small features might be overkill
3. **Inconsistency** - Some use constants, some don't

## Recommended Approaches

### Option 1: Flat Structure (Recommended for Small Features)
```
features/
  products/
    api.ts              # Single API file
    hooks/
    types/
    index.ts
```

**Pros:**
- Simpler structure
- Less nesting
- Good for features with < 5 endpoints

**Cons:**
- Can get messy if feature grows

### Option 2: Current Structure (Good for Large Features)
```
features/
  products/
    api/
      products.api.ts
      products.endpoints.ts  # Endpoint constants
    hooks/
    types/
```

**Pros:**
- Better organization for large features
- Can split into multiple files if needed
- Clear separation

**Cons:**
- More nesting
- Might be overkill for small features

### Option 3: Hybrid (Best of Both)
```
features/
  products/
    api.ts              # For small features (< 5 endpoints)
  orders/
    api/                # For large features
      orders.api.ts
      orders.endpoints.ts
```

## Recommendation

**Use flat structure (`api.ts`) for most features:**
- Simpler
- Less overhead
- Still scalable
- Move to `api/` folder only when feature grows

**Always use endpoint constants:**
- Centralized in `constants/api.ts` or feature-specific
- Type-safe
- Easy to refactor

## Implementation

### Small Feature (Flat)
```typescript
// features/highlights/api.ts
import { apiClient } from '@/lib/api'
import { API_ENDPOINTS } from '@/constants/api'
import { Highlight } from '../types/highlight.types'

export const highlightsApi = {
  getHighlights: () => apiClient.get<Highlight[]>(API_ENDPOINTS.HIGHLIGHTS),
  getHighlight: (id: string) => 
    apiClient.get<Highlight>(`${API_ENDPOINTS.HIGHLIGHTS}/${id}`),
}
```

### Large Feature (Folder)
```typescript
// features/products/api/products.api.ts
import { apiClient } from '@/lib/api'
import { API_ENDPOINTS } from '@/constants/api'
import { Product } from '../types/product.types'

export const productsApi = {
  getProducts: (params?) => apiClient.get<Product[]>(API_ENDPOINTS.PRODUCTS, { params }),
  getProduct: (id: string) => 
    apiClient.get<Product>(API_ENDPOINTS.PRODUCT_DETAIL(id)),
}
```

## Decision Matrix

| Feature Size | Structure | Example |
|-------------|-----------|---------|
| < 5 endpoints | `api.ts` | highlights |
| 5-10 endpoints | `api.ts` or `api/` | products, orders |
| > 10 endpoints | `api/` with split files | complex features |
