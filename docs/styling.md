# Styling Guide

## Atoms Pattern

Atoms are reusable style primitives. Never hardcode values.

### Theme Tokens
Access via `constants/theme.ts`:
- Colors: `theme.colors.primary`
- Spacing: `theme.spacing.md`
- Typography: `theme.typography.body`

### NativeWind Usage
Use Tailwind classes for layout:
```tsx
<View className="flex-row items-center justify-between p-4">
```

### Atoms Usage
Combine atoms for reusable styles:
```tsx
import { atoms } from '@/components/atoms'

<View style={[atoms.card, atoms.shadow]}>
```

## Dark Mode
Theme automatically switches based on system/user preference.
Access via `useTheme()` hook.

## Best Practices
1. Use theme tokens, never hardcode
2. Combine NativeWind + Atoms
3. Keep atoms small and focused
4. Test in both light/dark modes
