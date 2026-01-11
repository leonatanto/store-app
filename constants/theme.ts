/**
 * Theme tokens - never hardcode colors, spacing, or typography
 * All values should come from this file
 */

export const theme = {
  colors: {
    light: {
      // Primary
      primary: '#0a7ea4',
      primaryDark: '#085a75',
      primaryLight: '#0d9bc7',
      
      // Background
      background: '#ffffff',
      surface: '#f8f9fa',
      card: '#ffffff',
      
      // Text
      text: '#11181C',
      textSecondary: '#687076',
      textTertiary: '#9BA1A6',
      
      // Border
      border: '#e1e4e8',
      borderLight: '#f1f3f5',
      
      // Status
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      
      // UI
      tint: '#0a7ea4',
      icon: '#687076',
      tabIconDefault: '#687076',
      tabIconSelected: '#0a7ea4',
    },
    dark: {
      // Primary
      primary: '#0d9bc7',
      primaryDark: '#0a7ea4',
      primaryLight: '#10b8e0',
      
      // Background
      background: '#151718',
      surface: '#1f2122',
      card: '#252829',
      
      // Text
      text: '#ECEDEE',
      textSecondary: '#9BA1A6',
      textTertiary: '#687076',
      
      // Border
      border: '#2d3032',
      borderLight: '#252829',
      
      // Status
      success: '#28a745',
      error: '#dc3545',
      warning: '#ffc107',
      info: '#17a2b8',
      
      // UI
      tint: '#0d9bc7',
      icon: '#9BA1A6',
      tabIconDefault: '#9BA1A6',
      tabIconSelected: '#0d9bc7',
    },
  },
  
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  typography: {
    fontFamily: {
      sans: 'System',
      serif: 'System',
      mono: 'Courier',
    },
    fontSize: {
      xxs: 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
    },
    fontWeight: {
      normal: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  
  shadow: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
} as const

export type Theme = typeof theme

// Legacy export for compatibility
export const Colors = theme.colors
