# Dependencies Guide

## Package Manager

This project uses **pnpm** for package management.

## Key Dependencies

### Core
- **React 19.1.0** - Latest React
- **React Native 0.81.5** - Expo compatible version
- **Expo ~54.0.31** - Latest Expo SDK

### State & Data
- **Zustand ^4.5.2** - State management
- **@tanstack/react-query ^5.25.0** - Data fetching
- **react-native-mmkv ^4.1.1** - Fast, synchronous storage

### UI & Styling
- **NativeWind ^4.0.1** - Tailwind for React Native
- **@gorhom/bottom-sheet ^5.6.1** - Bottom sheets
- **expo-image ^3.0.11** - Optimized images

### Networking
- **axios ^1.7.7** - HTTP client

## Storage

Using **MMKV** for fast, synchronous storage. Requires development build (not Expo Go). See `docs/mmkv-migration.md` for details.

## Installation

```bash
pnpm install
```

## Troubleshooting

### Expo Compatibility
All dependencies are tested with Expo SDK 54. If you upgrade Expo, check compatibility:
- React Native version must match Expo requirements
- Native modules may need updates

## Updating Dependencies

```bash
# Update all
pnpm update

# Update specific package
pnpm update react-native-mmkv

# Check outdated
pnpm outdated
```
