# Quick Start Guide

## First Time Setup

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm start
```

No prebuild needed! Works with Expo Go.

### 3. Run on Simulator
```bash
# iOS Simulator
pnpm ios

# Android Emulator  
pnpm android
```

## Daily Development

### Option 1: Run Directly (Recommended)
```bash
# This builds, starts Metro, and opens simulator
pnpm ios      # iOS
pnpm android  # Android
```

### Option 2: Start Metro Separately
```bash
# Terminal 1: Start Metro
pnpm start

# Terminal 2: Open simulator
pnpm ios      # or pnpm android
```

## Commands Reference

```bash
# Prebuild (first time or after adding native modules)
pnpm prebuild
pnpm prebuild:clean  # Clean prebuild

# Run on platform
pnpm ios             # iOS Simulator
pnpm android         # Android Emulator
pnpm web             # Web Browser

# Development
pnpm start           # Start Metro with dev client
pnpm start           # Start Metro (works with Expo Go)

# Code Quality
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
```

## Troubleshooting

### "NitroModules not supported" Error
- You're trying to use Expo Go
- Solution: Use `pnpm ios` or `pnpm android` (not Expo Go)

### Prebuild Issues
```bash
# Clean and rebuild
pnpm prebuild:clean
pnpm ios
```

### Simulator Not Opening
```bash
# Make sure simulator is installed
# iOS: Xcode > Preferences > Components
# Android: Android Studio > AVD Manager

# Then run
pnpm ios      # or pnpm android
```

## Notes

- **Works with Expo Go**: No prebuild needed
- **Daily use**: Just `pnpm start` and choose platform
- **Simulator**: Use `pnpm ios` or `pnpm android`
- **Web**: Works with `pnpm web`
- **MMKV**: See `docs/mmkv-migration.md` if you want to migrate to MMKV later
