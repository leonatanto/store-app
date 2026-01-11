# Development Build Setup

## Development Build Required

This app uses **MMKV** which requires a **development build** (not Expo Go).

You need a development build because:
1. **MMKV** is a native module (doesn't work in Expo Go)
2. Custom native modules require development build
3. Production builds require development build setup

## Option 1: Development Build (Recommended)

### Install EAS CLI
```bash
npm install -g eas-cli
```

### Configure EAS
```bash
eas build:configure
```

### Create Development Build
```bash
# iOS
eas build --profile development --platform ios

# Android
eas build --profile development --platform android
```

### Install on Device
- Download and install the build from EAS
- Or use `eas build:run` to install directly

### Start Dev Server
```bash
pnpm start --dev-client
```

## Option 2: Expo Prebuild

### Generate Native Code
```bash
npx expo prebuild
```

### Run on Platform
```bash
# iOS
pnpm ios

# Android
pnpm android
```

## Why Development Build?

- **Native Modules**: Access to custom native code
- **Better Performance**: Some native modules are faster
- **More Features**: Full access to native APIs
- **Production Ready**: Same build as production

## Current Setup

This app **requires a development build** because it uses:
- **MMKV** (native module for fast storage)
- Custom native modules

## Quick Start with Development Build

```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login
eas login

# 3. Configure
eas build:configure

# 4. Build development client
eas build --profile development --platform ios

# 5. Install on device and start
pnpm start --dev-client
```

## Troubleshooting

### Build Issues
```bash
# Clear cache
pnpm start --clear

# Reset project
pnpm reset-project
```
