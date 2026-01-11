# Getting Started

## Installation

1. **Install dependencies:**
```bash
pnpm install
```

2. **Prebuild native code (required for MMKV):**
```bash
npx expo prebuild
```

## Running the App

### Quick Start

**1. Prebuild (first time only):**
```bash
npx expo prebuild
```

**2. Run on simulator:**
```bash
# iOS Simulator
pnpm ios

# Android Emulator
pnpm android
```

This will:
- Start Metro bundler
- Open simulator/emulator
- Install and run the app

### Important Notes

- ⚠️ **Requires Development Build**: MMKV doesn't work in Expo Go
- Must run `expo prebuild` before first use
- After prebuild, you can use `pnpm ios` or `pnpm android` directly

### Run on Specific Platform

**iOS Simulator:**
```bash
pnpm ios
```

**Android Emulator:**
```bash
pnpm android
```

**Web Browser:**
```bash
pnpm web
```

### Development Build Required

This app uses **MMKV** which requires a **development build** (not Expo Go).

**Why?**
- MMKV is a native module that doesn't work in Expo Go
- Provides much faster storage (50-100x faster than AsyncStorage)
- Synchronous API (no async/await needed)

**Solution:**
Run `npx expo prebuild` to generate native code, then use development build.

## Development Workflow

### First Time Setup
```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start

# Press 'i' for iOS or 'a' for Android
```

### Daily Development
```bash
# Just start the server
pnpm start

# Or run directly on platform
pnpm ios      # iOS Simulator
pnpm android  # Android Emulator
```

## Troubleshooting

### Clear Cache
```bash
# Clear Metro bundler cache
pnpm start --clear

# Clear Expo cache
expo start -c
```

### Reset Project
```bash
pnpm reset-project
```

### Reinstall Dependencies
```bash
rm -rf node_modules
pnpm install
```

## Environment Setup

### iOS (macOS only)
- Xcode installed
- iOS Simulator or physical device
- CocoaPods (for native modules)

### Android
- Android Studio installed
- Android SDK configured
- Android Emulator or physical device

### Web
- No additional setup needed
- Runs in browser automatically

## Next Steps

1. ✅ Install dependencies: `pnpm install`
2. ✅ Start dev server: `pnpm start`
3. 📱 Open on device/simulator
4. 🚀 Start coding!
