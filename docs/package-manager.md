# Package Manager - pnpm

## Overview

This project uses **pnpm** as the package manager for better performance and disk space efficiency.

## Why pnpm?

1. **Faster** - Up to 2x faster than npm/yarn
2. **Disk Efficient** - Uses hard links, saves disk space
3. **Strict** - Better dependency resolution
4. **Monorepo Ready** - Great for monorepos

## Installation

### Install pnpm globally
```bash
npm install -g pnpm
# or
brew install pnpm
```

### Verify installation
```bash
pnpm --version
```

## Usage

### Install dependencies
```bash
pnpm install
# or
pnpm i
```

### Add dependency
```bash
pnpm add <package>
pnpm add -D <package>  # dev dependency
```

### Remove dependency
```bash
pnpm remove <package>
```

### Update dependencies
```bash
pnpm update
pnpm update <package>
```

## Migration from npm

If you have `package-lock.json`, you can migrate:

1. **Delete npm lock file:**
```bash
rm package-lock.json
```

2. **Install with pnpm:**
```bash
pnpm install
```

3. **Commit `pnpm-lock.yaml`:**
```bash
git add pnpm-lock.yaml
git commit -m "Migrate to pnpm"
```

## Configuration

The `.npmrc` file is configured for React Native compatibility:
- `shamefully-hoist=true` - Required for React Native
- `public-hoist-pattern` - Hoists Expo and React Native packages

## Scripts

All npm scripts work the same:
```bash
pnpm start
pnpm lint
pnpm format
```

## Troubleshooting

### Clear cache
```bash
pnpm store prune
```

### Reset node_modules
```bash
rm -rf node_modules
pnpm install
```

### Expo issues
If you encounter issues with Expo, try:
```bash
pnpm install --shamefully-hoist
```

## Notes

- `package-lock.json` is ignored (use `pnpm-lock.yaml`)
- `preinstall` script prevents using npm/yarn
- All team members should use pnpm
