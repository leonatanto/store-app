# MMKV Storage Guide

## Overview

This app uses **MMKV** for fast, synchronous storage. MMKV requires a **development build** (not Expo Go).

## Why MMKV?

- ✅ **Synchronous API**: No `async/await` needed
- ✅ **Fast**: ~0.1ms per operation (vs 5-10ms for AsyncStorage)
- ✅ **Persistent**: Data survives app restarts
- ✅ **Type-safe**: Helper functions for all data types

## Setup

### 1. Prebuild Native Code

MMKV requires native code:

```bash
npx expo prebuild
```

### 2. Run on Simulator/Device

```bash
pnpm ios      # iOS Simulator
pnpm android  # Android Emulator
```

## Usage

```typescript
import { storageHelpers } from '@/lib/storage/storage'

// All operations are synchronous
storageHelpers.setString('key', 'value')
const value = storageHelpers.getString('key')

storageHelpers.setObject('user', { name: 'John' })
const user = storageHelpers.getObject<User>('user')
```

## Storage Helpers

All helpers are synchronous:

```typescript
// Strings
storageHelpers.getString(key)
storageHelpers.setString(key, value)

// Booleans
storageHelpers.getBoolean(key)
storageHelpers.setBoolean(key, value)

// Numbers
storageHelpers.getNumber(key)
storageHelpers.setNumber(key, value)

// Objects
storageHelpers.getObject<T>(key)
storageHelpers.setObject<T>(key, value)

// Delete
storageHelpers.delete(key)
storageHelpers.clearAll()
```

## Performance

- **MMKV**: ~0.1ms per operation (synchronous)
- **AsyncStorage**: ~5-10ms per operation (asynchronous)
- **Speed gain**: ~50-100x faster

## Important Notes

- ⚠️ **Requires Development Build**: MMKV doesn't work in Expo Go
- Must run `expo prebuild` before first use
- All storage operations are synchronous (no async/await)
