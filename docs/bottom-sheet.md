# Bottom Sheet Guide

## Overview

Using `@gorhom/bottom-sheet` for smooth, performant bottom sheets.

## Setup

Bottom sheet provider is already set up in `app/_layout.tsx`.

## Basic Usage

```typescript
import { AppBottomSheet } from '@/components/BottomSheet'
import { useBottomSheet } from '@/hooks/use-bottom-sheet'

function MyComponent() {
  const { ref, present, dismiss } = useBottomSheet()
  
  return (
    <>
      <Button onPress={present} title="Open Sheet" />
      
      <AppBottomSheet
        ref={ref}
        snapPoints={['50%', '90%']}
        onClose={() => console.log('Closed')}
      >
        <View>
          <Text>Bottom Sheet Content</Text>
        </View>
      </AppBottomSheet>
    </>
  )
}
```

## Custom Snap Points

```typescript
// Percentage
snapPoints={['25%', '50%', '90%']}

// Fixed height
snapPoints={[200, 400, 600]}

// Mixed
snapPoints={['25%', 400]}
```

## Features

- Smooth animations
- Gesture-based interactions
- Backdrop support
- Theme-aware styling
- Type-safe refs

## Best Practices

1. Use appropriate snap points
2. Handle onClose callback
3. Use backdrop for better UX
4. Keep content scrollable if needed
5. Test on different screen sizes
