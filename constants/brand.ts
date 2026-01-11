/**
 * Brand configuration for multi-brand reuse
 * Update these values to rebrand the app
 */

export const brandConfig = {
  name: 'Baby Carrier Store',
  displayName: 'Baby Carrier Store',
  bundleId: 'com.babycarrier.store',
  packageName: 'com.babycarrier.store',
  
  // Colors
  primaryColor: '#0a7ea4',
  secondaryColor: '#687076',
  
  // App metadata
  description: 'Premium baby carrier store',
  supportEmail: 'support@babycarrier.store',
  
  // Features
  features: {
    highlights: true,
    reviews: true,
    wishlist: true,
  },
} as const

export type BrandConfig = typeof brandConfig
