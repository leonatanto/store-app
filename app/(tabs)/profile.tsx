import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { atoms } from '@/components/atoms';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View style={[atoms.flex1, { backgroundColor: colors.background }]}>
      <View style={[atoms.pMd]}>
        <Text style={[atoms.textXl, atoms.textBold, { color: colors.text }]}>
          Profile
        </Text>
        <Link href="/orders" style={[atoms.textMd, { color: colors.primary, marginTop: 16 }]}>
          Order History
        </Link>
      </View>
    </View>
  );
}
