# Tick 📱

Tick is a mobile application designed to help tech enthusiasts master technical vocabulary through scheduled push notifications. By delivering random tech terms and their definitions throughout the day, Tick helps users naturally integrate accurate technical language into their daily communication.

## 📋 Table of Contents

- [Tick 📱](#tick-)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
      - [For Android:](#for-android)
      - [For iOS:](#for-ios)
      - [For Development:](#for-development)
  - [🏗 Technical Architecture](#-technical-architecture)
    - [Core Technologies](#core-technologies)
    - [Project Structure](#project-structure)
  - [🤝 Contributing](#-contributing)
    - [Coding Standards](#coding-standards)
  - [👥 Contributors](#-contributors)
    - [Core Team](#core-team)
  - [❓ Troubleshooting](#-troubleshooting)
    - [Common Issues](#common-issues)
    - [Getting Help](#getting-help)
  - [📄 License](#-license)
  - [🎉 Acknowledgments](#-acknowledgments)

## ✨ Features

- Random tech term notifications throughout the day
- Comprehensive tech vocabulary database
- Customizable notification frequency
- Offline term access
- Bookmark favorite terms
- Share terms with others

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- Yarn package manager
- React Native development environment
  - For iOS: Xcode (Mac only)
  - For Android: Android Studio
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/boyepanthera/tick
```

2. Navigate to the project directory:

```bash
cd tick
```

3. Install dependencies:

```bash
yarn install
```

4. Install iOS dependencies (Mac only):

```bash
cd ios && pod install && cd ..
```

### Running the App

#### For Android:

```bash
yarn android
```

#### For iOS:

```bash
yarn ios
```

#### For Development:

```bash
yarn start
```

## 🏗 Technical Architecture

### Core Technologies

1. **TypeScript**

   - Strict type checking enabled
   - Custom type definitions in `src/types`
   - Interface-first development approach

2. **State Management with Zustand**

   - Global state management
   - Persistent storage integration
   - Example store structure:

   ```typescript
   interface AppStore {
     terms: Term[];
     favorites: string[];
     notifications: NotificationSettings;
   }
   ```

3. **Data Management with TanStack Query**

   - Server-state synchronization
   - Optimistic updates
   - Offline support
   - Integration with Axios for API calls

4. **Styling with TailwindCSS**
   - Custom theme configuration
   - Responsive design utilities
   - Dark mode support
   - Consistent styling across platforms

### Project Structure

```
tick/
├── src/
│   ├── components/    # Reusable UI components
│   ├── screens/       # Screen components
│   ├── stores/        # Zustand stores
│   ├── services/      # API and business logic
│   ├── types/         # TypeScript definitions
│   └── utils/         # Helper functions
├── assets/            # Images, fonts, etc.
└── __tests__/         # Test files
|
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Clone the repository
2. Create a feature branch:

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes:

```bash
git commit -m 'Add amazing feature'
```

4. Push to your branch:

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

### Coding Standards

- Follow the TypeScript style guide
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

## 👥 Contributors

Thank you to all our amazing contributors who have helped make Tick possible!

### Core Team

- [Geller](https://github.com/geller99)
- [Mustafa Jamshidi](https://github.com/mustafajamis)
- [Olanrewaju A. Olaboye](https://github.com/boyepanthera)

## ❓ Troubleshooting

### Common Issues

1. **Build Failures**

   - Clear watchman: `watchman watch-del-all`
   - Clean and rebuild: `yarn clean && yarn install`

2. **iOS Issues**

   - Reset iOS folder: `cd ios && pod deintegrate && pod install`
   - Clean build folder: `xcodebuild clean`

3. **Android Issues**
   - Clear gradle cache: `cd android && ./gradlew clean`
   - Reset Android folder: `cd android && ./gradlew clean buildCache`

### Getting Help

- Open an issue for bugs
- Discussions for questions
- Pull requests for contributions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎉 Acknowledgments

- Thanks to all contributors
- Built with React Native
- Powered by TypeScript and modern tooling

For more information or support, please open an issue or contact the maintainers.
