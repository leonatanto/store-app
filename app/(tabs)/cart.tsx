import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { atoms } from '@/components/atoms';
import { useCartStore } from '@/stores/cartStore';

export default function CartScreen() {
  const { colors } = useTheme();
  const { items, getTotal, getItemCount } = useCartStore();

  return (
    <View style={[atoms.flex1, { backgroundColor: colors.background }]}>
      <View style={[atoms.pMd]}>
        <Text style={[atoms.textXl, atoms.textBold, { color: colors.text }]}>
          Shopping Cart
        </Text>
        <Text style={[atoms.textSm, { color: colors.textSecondary, marginTop: 8 }]}>
          {getItemCount()} items • Total: ${getTotal().toFixed(2)}
        </Text>
        {items.length === 0 && (
          <Text style={[atoms.textMd, { color: colors.textTertiary, marginTop: 24 }]}>
            Your cart is empty
          </Text>
        )}
      </View>
    </View>
  );
}
