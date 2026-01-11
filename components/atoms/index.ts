/**
 * Atoms - Atomic UI Primitives
 * Reusable style combinations following Atoms Pattern
 */

import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { theme } from '@/constants/theme'

type Atoms = {
  // Layout
  flexRow: ViewStyle
  flexCol: ViewStyle
  flex1: ViewStyle
  flexCenter: ViewStyle
  flexBetween: ViewStyle
  flexAround: ViewStyle
  
  // Spacing
  pXxs: ViewStyle
  pXs: ViewStyle
  pSm: ViewStyle
  pMd: ViewStyle
  pLg: ViewStyle
  pXl: ViewStyle
  pXxl: ViewStyle
  
  mXxs: ViewStyle
  mXs: ViewStyle
  mSm: ViewStyle
  mMd: ViewStyle
  mLg: ViewStyle
  mXl: ViewStyle
  mXxl: ViewStyle
  
  // Typography
  textXxs: TextStyle
  textXs: TextStyle
  textSm: TextStyle
  textMd: TextStyle
  textLg: TextStyle
  textXl: TextStyle
  textXxl: TextStyle
  
  textBold: TextStyle
  textMedium: TextStyle
  textNormal: TextStyle
  
  // Border
  border: ViewStyle
  borderRounded: ViewStyle
  borderRoundedLg: ViewStyle
  
  // Shadow
  shadowSm: ViewStyle
  shadowMd: ViewStyle
  shadowLg: ViewStyle
  
  // Card
  card: ViewStyle
  cardRounded: ViewStyle
}

export const atoms: Atoms = StyleSheet.create({
  // Layout
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
  // Spacing - Padding
  pXxs: { padding: theme.spacing.xxs },
  pXs: { padding: theme.spacing.xs },
  pSm: { padding: theme.spacing.sm },
  pMd: { padding: theme.spacing.md },
  pLg: { padding: theme.spacing.lg },
  pXl: { padding: theme.spacing.xl },
  pXxl: { padding: theme.spacing.xxl },
  
  // Spacing - Margin
  mXxs: { margin: theme.spacing.xxs },
  mXs: { margin: theme.spacing.xs },
  mSm: { margin: theme.spacing.sm },
  mMd: { margin: theme.spacing.md },
  mLg: { margin: theme.spacing.lg },
  mXl: { margin: theme.spacing.xl },
  mXxl: { margin: theme.spacing.xxl },
  
  // Typography
  textXxs: {
    fontSize: theme.typography.fontSize.xxs,
    lineHeight: theme.typography.fontSize.xxs * theme.typography.lineHeight.normal,
  },
  textXs: {
    fontSize: theme.typography.fontSize.xs,
    lineHeight: theme.typography.fontSize.xs * theme.typography.lineHeight.normal,
  },
  textSm: {
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.fontSize.sm * theme.typography.lineHeight.normal,
  },
  textMd: {
    fontSize: theme.typography.fontSize.md,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.normal,
  },
  textLg: {
    fontSize: theme.typography.fontSize.lg,
    lineHeight: theme.typography.fontSize.lg * theme.typography.lineHeight.normal,
  },
  textXl: {
    fontSize: theme.typography.fontSize.xl,
    lineHeight: theme.typography.fontSize.xl * theme.typography.lineHeight.normal,
  },
  textXxl: {
    fontSize: theme.typography.fontSize.xxl,
    lineHeight: theme.typography.fontSize.xxl * theme.typography.lineHeight.normal,
  },
  
  textBold: {
    fontWeight: theme.typography.fontWeight.bold,
  },
  textMedium: {
    fontWeight: theme.typography.fontWeight.medium,
  },
  textNormal: {
    fontWeight: theme.typography.fontWeight.normal,
  },
  
  // Border
  border: {
    borderWidth: 1,
  },
  borderRounded: {
    borderRadius: theme.borderRadius.md,
  },
  borderRoundedLg: {
    borderRadius: theme.borderRadius.lg,
  },
  
  // Shadow
  shadowSm: theme.shadow.sm,
  shadowMd: theme.shadow.md,
  shadowLg: theme.shadow.lg,
  
  // Card
  card: {
    ...theme.shadow.sm,
    borderRadius: theme.borderRadius.md,
  },
  cardRounded: {
    ...theme.shadow.md,
    borderRadius: theme.borderRadius.lg,
  },
})
