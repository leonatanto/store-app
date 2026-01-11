import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { atoms } from '@/components/atoms';

export default function HighlightsScreen() {
  const { colors } = useTheme();

  return (
    <View style={[atoms.flex1, { backgroundColor: colors.background }]}>
      <View style={[atoms.pMd]}>
        <Text style={[atoms.textXl, atoms.textBold, { color: colors.text }]}>
          Highlights
        </Text>
        <Text style={[atoms.textSm, { color: colors.textSecondary, marginTop: 8 }]}>
          Instagram-style highlights coming soon
        </Text>
      </View>
    </View>
  );
}
