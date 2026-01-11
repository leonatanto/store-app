# Error Handling Guide

## Overview

The app has comprehensive error handling with:
- Error Boundaries for React errors
- React Query error handling
- API error utilities
- User-friendly error messages

## Error Boundaries

### Global Error Boundary
Wraps the entire app in `app/_layout.tsx` to catch any React errors.

### Query Error Boundary
Handles React Query errors specifically.

```typescript
import { QueryErrorBoundary } from '@/components/QueryErrorBoundary'

<QueryErrorBoundary>
  <YourComponent />
</QueryErrorBoundary>
```

## Error Handler Hook

Use `useErrorHandler` hook for handling errors in components:

```typescript
import { useErrorHandler } from '@/hooks/use-error-handler'

function MyComponent() {
  const { handleError } = useErrorHandler()
  
  const fetchData = async () => {
    try {
      const data = await api.getData()
    } catch (error) {
      handleError(error, { showAlert: true })
    }
  }
}
```

## API Error Utilities

```typescript
import { getErrorMessage, isAuthError, isNetworkError } from '@/lib/api'

try {
  await api.getData()
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

## React Query Error Handling

React Query automatically handles errors. Use error states:

```typescript
const { data, error, isError } = useQuery(...)

if (isError) {
  return <ErrorView error={error} />
}
```

## Best Practices

1. **Always handle errors** - Don't let errors crash the app
2. **Show user-friendly messages** - Don't show technical errors to users
3. **Log errors in dev** - Use `__DEV__` for error logging
4. **Use error boundaries** - Catch React errors gracefully
5. **Handle network errors** - Show appropriate messages for offline state
