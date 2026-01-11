# Setup Guide

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables (optional):
Create `.env` file:
```
EXPO_PUBLIC_API_URL=https://your-api-url.com
```

## Configuration

### Brand Configuration
Edit `constants/brand.ts` to customize:
- App name
- Colors
- Bundle ID
- Features

### API Configuration
Edit `lib/api/client.ts` to set your API base URL.

## Running the App

```bash
# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Project Structure

- All code in English
- Atoms pattern for styling
- Feature-based organization
- TypeScript strict mode
