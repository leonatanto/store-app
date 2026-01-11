# Code Style Guide

## Formatting

We use **Prettier** for automatic code formatting.

### Configuration
- Semi-colons: `false`
- Quotes: Single quotes
- Tab width: 2 spaces
- Print width: 100 characters
- Trailing commas: ES5

### Commands
```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

## Linting

We use **ESLint** with Expo config for code quality.

### Configuration
- Base: `eslint-config-expo`
- Prettier integration: `eslint-config-prettier` (disables conflicting rules)

### Commands
```bash
# Lint all files
npm run lint

# Lint and auto-fix
npm run lint:fix
```

## Editor Setup

### VS Code
Install extensions:
- ESLint
- Prettier - Code formatter

Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Cursor
Prettier and ESLint should work automatically with the config files.

## File Formatting

### TypeScript/JavaScript
- Single quotes
- No semicolons
- 2 space indentation
- Trailing commas where valid

### JSON
- 2 space indentation
- Trailing commas where valid

### Markdown
- 80 character line width
- Wrap prose

## Pre-commit (Optional)

You can add pre-commit hooks using `husky` and `lint-staged`:

```bash
npm install --save-dev husky lint-staged
```

Then add to `package.json`:
```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```
