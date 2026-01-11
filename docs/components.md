# Components Guide

## Atoms Components

Base UI components following the Atoms Pattern. All components use theme tokens (no hardcoded values).

## Button

```typescript
import { Button } from '@/components/atoms'

<Button
  title="Click Me"
  onPress={() => {}}
  variant="primary" // primary | secondary | outline | ghost | danger
  size="md" // sm | md | lg
  loading={false}
  disabled={false}
  fullWidth={false}
  leftIcon={<Icon name="plus" />}
  rightIcon={<Icon name="arrow-right" />}
/>
```

### Variants
- **primary**: Primary action button (blue background, white text)
- **secondary**: Secondary action (surface background)
- **outline**: Outlined button (transparent, bordered)
- **ghost**: Minimal button (transparent, no border)
- **danger**: Destructive action (red background)

## Card

```typescript
import { Card } from '@/components/atoms'

<Card variant="default" onPress={() => {}}>
  <Text>Card Content</Text>
</Card>
```

### Variants
- **default**: Standard card with shadow
- **elevated**: Card with larger shadow
- **outlined**: Card with border instead of shadow

## Avatar

```typescript
import { Avatar } from '@/components/atoms'

<Avatar
  uri="https://example.com/avatar.jpg"
  name="John Doe"
  size="md" // xs | sm | md | lg | xl
  fallbackColor="#0a7ea4"
/>
```

### Features
- Circular image with fallback
- Shows initials if no image
- Multiple size options
- Custom fallback color

## TextInput

```typescript
import { TextInput } from '@/components/atoms'

<TextInput
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  error={errors.email}
  helperText="We'll never share your email"
  leftIcon={<Icon name="mail" />}
  rightIcon={<Icon name="check" />}
/>
```

### Features
- Label and error state
- Helper text support
- Left/right icons
- Themed styling

## Dropdown

```typescript
import { Dropdown } from '@/components/atoms'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3', disabled: true },
]

<Dropdown
  options={options}
  value={selectedValue}
  onSelect={(value) => setSelectedValue(value)}
  placeholder="Select an option"
  label="Choose"
  error={errors.selection}
  disabled={false}
/>
```

### Features
- Modern bottom sheet UI
- Search support (can be added)
- Disabled options
- Selected state indicator
- Error state

## Usage Examples

### Form with Inputs

```typescript
import { View } from '@/components/atoms'
import { TextInput, Button, Dropdown } from '@/components/atoms'

function MyForm() {
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
      />
      
      <Dropdown
        label="Country"
        options={countryOptions}
        value={country}
        onSelect={setCountry}
      />
      
      <Button
        title="Submit"
        onPress={handleSubmit}
        fullWidth
      />
    </View>
  )
}
```

### Product Card

```typescript
import { Card, Avatar, Button } from '@/components/atoms'
import { CachedImage } from '@/components/CachedImage'

function ProductCard({ product }) {
  return (
    <Card variant="elevated" onPress={() => navigate(product.id)}>
      <CachedImage uri={product.image} style={{ height: 200 }} />
      <View style={{ padding: 16 }}>
        <Text size="lg" weight="bold">{product.name}</Text>
        <Text size="md" color="primary">${product.price}</Text>
        <Button
          title="Add to Cart"
          onPress={() => addToCart(product)}
          size="sm"
        />
      </View>
    </Card>
  )
}
```

## Best Practices

1. **Always use theme tokens**: Don't hardcode colors, spacing, or sizes
2. **Use variants**: Leverage built-in variants instead of custom styles
3. **Compose components**: Combine atoms to build complex UIs
4. **Consistent spacing**: Use theme spacing values
5. **Accessibility**: All components support accessibility props
