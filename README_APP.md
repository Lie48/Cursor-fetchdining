# Fetch Dining

A mobile ordering app for students to order from dining locations on campus.

## Features

- **Student Interface**: Browse dining locations, place orders, track order progress, view history
- **Worker Interface**: Manage orders from different dining locations
- **Payment Options**: Campus meal swipes, dining dollars, or card
- **Dark/Light Mode**: Built-in theme support

## Development

### Prerequisites

- Node.js installed
- Expo Go app on your mobile device

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
# or
npx expo start
```

3. Scan the QR code with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

### App Structure

- `App.js` - Main entry point with navigation
- `screens/` - All app screens
  - `LoadingScreen.js` - Initial loading screen
  - `LandingScreen.js` - Landing page with university search
  - `UniversitySearchScreen.js` - University selection
- `components/` - Reusable components
  - `BoneLogo.js` - App logo component
- `constants/` - App constants
  - `Colors.js` - Color scheme (UIndy Maroon)

## Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

## Screens Implemented

✅ Loading Screen
✅ Landing Page
⏳ University Search Screen (placeholder)
⏳ Student Main Screen
⏳ Worker Interface
⏳ Login/Authentication
⏳ Order Management

## Color Scheme

- **Primary Color (UIndy Maroon)**: `#800000`
- **Background**: White
- **Text**: Black/White depending on background

