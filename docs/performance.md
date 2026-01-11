# Performance Guidelines

## Image Optimization
- Use `expo-image` for all images
- Implement lazy loading
- Use appropriate image sizes
- Cache images with React Query

## List Performance
- Use `FlatList` with proper `keyExtractor`
- Implement `getItemLayout` when possible
- Use `removeClippedSubviews` for long lists
- Virtualize product grids

## Query Optimization
- Cache queries appropriately
- Use `staleTime` to reduce refetches
- Implement optimistic updates
- Batch related queries

## Bundle Size
- Code split by route
- Lazy load heavy components
- Remove unused dependencies
- Use tree-shaking

## Memory
- Cleanup subscriptions
- Unmount unused components
- Optimize re-renders with `React.memo`
- Use `useMemo`/`useCallback` wisely
