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

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
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
