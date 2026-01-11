# App Plan - Baby Carrier Store

## Features

### 1. Catalog (Home)
- Product grid/list view
- Search and filter
- Category navigation
- Product quick view

### 2. Product Details
- Image gallery
- Product info (name, price, description)
- Variants selection (size, color)
- Add to cart
- Related products

### 3. Shopping Cart
- View cart items
- Update quantities
- Remove items
- Proceed to checkout

### 4. Checkout
- Shipping address
- Payment method
- Order summary
- Place order

### 5. Highlights (Instagram-style)
- Story-like highlights
- Show carrier advantages
- Announcements
- Swipeable stories

### 6. Profile Tab
- User info
- Settings
- Order history navigation
- Logout

### 7. Order History
- Ongoing orders (tracking)
- Past orders
- Order details
- Reorder functionality

## Tech Implementation

### State Management
- Zustand stores: cart, auth, theme, orders
- React Query: product data, orders, API calls
- MMKV: persistent storage (cart, auth tokens, preferences)

### Navigation
- Expo Router file-based routing
- Tab navigation: Home, Highlights, Cart, Profile
- Stack navigation: Product details, Checkout, Order details

### Performance
- Image optimization with expo-image
- List virtualization for product grids
- Query caching with React Query
- Lazy loading for highlights
