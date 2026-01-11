import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { atoms } from '@/components/atoms';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[atoms.flex1, { backgroundColor: colors.background }]}>
      <View style={[atoms.pMd]}>
        <Text style={[atoms.textXxl, atoms.textBold, { color: colors.text }]}>
          Catalog
        </Text>
        <Text style={[atoms.textSm, { color: colors.textSecondary, marginTop: 8 }]}>
          Browse our baby carrier collection
        </Text>
      </View>
    </ScrollView>
  );
}
