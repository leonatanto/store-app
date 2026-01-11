/**
 * Theme Hook
 * Provides theme values based on current mode
 */

import { useColorScheme } from '@/hooks/use-color-scheme'
import { useThemeStore } from '@/stores/themeStore'
import { theme } from '@/constants/theme'

export function useTheme() {
  const systemColorScheme = useColorScheme()
  const { mode } = useThemeStore()
  
  // Determine actual theme
  const actualMode = mode === 'system' ? systemColorScheme : mode
  const isDark = actualMode === 'dark'
  
  // Get theme colors
  const colors = isDark ? theme.colors.dark : theme.colors.light
  
  return {
    colors,
    spacing: theme.spacing,
    typography: theme.typography,
    borderRadius: theme.borderRadius,
    shadow: theme.shadow,
    isDark,
    mode: actualMode,
  }
}
