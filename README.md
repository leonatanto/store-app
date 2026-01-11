# Store App

E-commerce mobile app for baby carrier store built with Expo, React Native, and TypeScript.

## Tech Stack

- **Framework**: Expo Router
- **State Management**: Zustand
- **Data Fetching**: React Query (TanStack Query)
- **Storage**: MMKV
- **Styling**: NativeWind + Atoms Pattern
- **Media**: Expo AV
- **Language**: TypeScript

## Setup

1. **Install pnpm** (if not installed):
```bash
npm install -g pnpm
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Prebuild native code (required for MMKV):**
```bash
npx expo prebuild
```

4. **Run on specific platform:**
```bash
pnpm ios      # iOS Simulator
pnpm android  # Android Emulator
pnpm web      # Web Browser
```

**Note:** 
- ⚠️ **Requires Development Build** (not Expo Go)
- MMKV requires native code - run `expo prebuild` first
- Bottom sheet automatically falls back to Modal in Expo Go

## Quick Start

```bash
# Install dependencies
pnpm install

# Prebuild native code (required for MMKV)
npx expo prebuild

# Run on simulator
pnpm ios      # iOS Simulator
pnpm android  # Android Emulator
```

## Project Structure

- `app/` - Expo Router screens
- `components/` - Reusable UI components
- `components/atoms/` - Atomic UI primitives
- `features/` - Feature-based modules
- `lib/` - Utilities and helpers
- `stores/` - Zustand stores
- `hooks/` - Custom React hooks
- `constants/` - App constants and config
- `types/` - TypeScript type definitions
- `docs/` - Documentation

## Documentation

See `docs/` folder for detailed documentation:
- `app-plan.md` - Feature overview
- `architecture.md` - Project structure
- `styling.md` - Styling guidelines
- `performance.md` - Performance best practices
- `api.md` - API integration guide

## Branding

App branding is configurable via `constants/brand.ts` for multi-brand reuse.
