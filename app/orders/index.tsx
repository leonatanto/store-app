import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { atoms } from '@/components/atoms';

export default function OrdersScreen() {
  const { colors } = useTheme();

  return (
    <View style={[atoms.flex1, { backgroundColor: colors.background }]}>
      <View style={[atoms.pMd]}>
        <Text style={[atoms.textXl, atoms.textBold, { color: colors.text }]}>
          Order History
        </Text>
        <Text style={[atoms.textSm, { color: colors.textSecondary, marginTop: 8 }]}>
          View your past and ongoing orders
        </Text>
      </View>
    </View>
  );
}
