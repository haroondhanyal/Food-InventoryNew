# 🍎 Food Inventory Management

A mobile-based **Food Inventory Management Application** designed to help users organize and manage food items efficiently. The application provides a structured way to maintain food inventory while offering a simple mobile interface, user authentication flow, navigation, and barcode-scanning capabilities.

The project is developed using **React Native and Expo**, allowing the application to support mobile platforms while maintaining a reusable JavaScript-based architecture.

---

## 📱 Project Overview

Food Inventory Management is designed to simplify the process of managing food and grocery inventory.

Instead of manually remembering available products, users can interact with a centralized application where food inventory information can be managed through an easy-to-use mobile interface.

The application follows a modular structure in which screens, user context, navigation, configuration, and reusable application resources are separated.

---

## 🎯 Project Objectives

The main objectives of this project are:

- Digitize food inventory management.
- Provide a simple mobile interface for inventory operations.
- Reduce manual inventory tracking.
- Organize application functionality into reusable screens and components.
- Provide authenticated access to application functionality.
- Support barcode-based workflows.
- Provide a foundation that can be extended with expiry tracking, notifications, analytics, and cloud synchronization.

---

## ✨ Core Features

### 🔐 User Authentication

The application contains a dedicated login flow.

User state is maintained through a centralized `UserContext`. Based on the authentication state, the application determines whether the user should see the Login screen or access the main application.

Flow:

`Launch Application → User Context → Authentication Check → Login / Main Application`

---

### 📦 Food Inventory Management

The application is structured around managing food inventory from a mobile interface.

The inventory module can serve as the central location for maintaining food-related information and can be extended for:

- Food item management
- Product quantities
- Categories
- Storage information
- Inventory updates
- Product availability
- Expiration dates

---

### 📷 Barcode Scanning

Barcode-scanning dependencies are included in the project architecture.

This allows the application to support barcode-driven inventory workflows where products can be identified or processed using the mobile device camera.

Potential workflow:

`Scan Barcode → Identify Product → View/Add Product → Update Inventory`

---

### 🧭 Application Navigation

The application uses **React Navigation** to provide structured movement between application screens.

Navigation dependencies include support for:

- Stack Navigation
- Bottom Tab Navigation
- Drawer Navigation

This provides a flexible architecture for organizing different inventory modules.

---

### 👤 Centralized User State

The application uses React Context through `UserContext`.

This separates user/session state from individual screens and allows authentication information to be accessed across the application.

Example architecture:

```text
App
 │
 ├── NavigationContainer
 │
 └── UserProvider
      │
      └── StartApp
           │
           ├── Login
           │
           └── AppNavigation
```

---

## 🏗️ Application Architecture

The project follows a modular React Native architecture.

```text
Food-InventoryNew/
│
├── assets/
│   └── Application images and static resources
│
├── contexts/
│   └── User and application state management
│
├── screens/
│   └── Application screens and navigation
│
├── App.js
│   └── Main application entry point
│
├── constants.js
│   └── Shared application constants
│
├── app.json
│   └── Expo application configuration
│
├── babel.config.js
│   └── Babel configuration
│
├── package.json
│   └── Dependencies and project scripts
│
└── package-lock.json
    └── Dependency lock file
```

---

## 🔄 Application Flow

```text
Application Launch
        │
        ▼
Navigation Container
        │
        ▼
User Provider
        │
        ▼
Check User Session
       / \
      /   \
 No User   Authenticated
    │           │
    ▼           ▼
 Login     App Navigation
                │
                ▼
        Food Inventory Modules
```

The application starts from `App.js`.

`NavigationContainer` manages navigation while `UserProvider` provides centralized user state.

The `StartApp` component checks the current user.

If no authenticated user exists:

```text
Login Screen
```

is displayed.

If a user exists:

```text
AppNavigation
```

loads the main application.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React Native | Mobile application development |
| JavaScript | Core programming language |
| Expo | React Native development platform |
| React Navigation | Screen and application navigation |
| React Context | User/session state management |
| NativeBase | Mobile UI components |
| Expo Barcode Scanner | Barcode scanning functionality |
| Ionicons | Application icons |
| React Native SVG | SVG rendering |
| React Native Gesture Handler | Gesture support |
| React Native Reanimated | UI animation support |

---

## 📱 Platform Support

The project contains Expo commands for:

- 🤖 Android
- 🍎 iOS
- 🌐 Web

This makes the codebase suitable for cross-platform development.

---

## ⚙️ Installation

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Expo-compatible development environment
- VS Code
- Android Emulator or physical Android device for mobile testing

---

### Clone Repository

```bash
git clone https://github.com/haroondhanyal/Food-InventoryNew.git
```

Move into the project directory:

```bash
cd Food-InventoryNew
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

Start Expo:

```bash
npm start
```

or:

```bash
expo start
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

### Web

```bash
npm run web
```

---

## 🧪 Testing Scope

The project can be tested across several functional areas.

### Functional Testing

- Application launch
- Login flow
- Authentication state
- Navigation
- Inventory screens
- Form validations
- Barcode scanning
- Product/inventory operations
- Logout/session handling

### UI Testing

- Screen responsiveness
- Navigation behavior
- Form layouts
- Buttons and controls
- Mobile screen compatibility
- Error and validation messages

### Compatibility Testing

Testing can be performed across:

- Android devices
- Android emulators
- iOS devices/simulators
- Different screen sizes

---

## 🚀 Future Enhancements

The application can be expanded into a more complete smart inventory platform by adding:

### Expiry Management

Store expiration dates and automatically identify:

- Expiring Soon
- Expired
- Safe to Consume

### 🔔 Smart Notifications

Send notifications when:

- Food is close to expiration
- Inventory becomes low
- A commonly used item is unavailable

### 📊 Inventory Dashboard

Introduce analytics such as:

- Total products
- Low-stock items
- Expired products
- Expiring products
- Most-used categories
- Inventory trends

### 🛒 Shopping List

Automatically generate shopping recommendations from low-stock or unavailable items.

### ☁️ Cloud Synchronization

Connect the application to a backend/database so inventory can be synchronized across multiple devices.

### 🤖 AI-Based Recommendations

Future AI functionality could provide:

- Recipe suggestions from available food
- Food waste recommendations
- Consumption predictions
- Restocking recommendations
- Expiry-risk analysis

---

## 💡 Use Cases

The project can potentially be adapted for:

- Home kitchens
- Grocery inventory
- Restaurants
- Cafeterias
- Food stores
- Small warehouses
- Hostel kitchens
- Food management businesses

---

## 🎯 Project Purpose

This project demonstrates practical implementation of **React Native mobile development, Expo, authentication state management, application navigation, reusable project architecture, and barcode-enabled inventory workflows**.

It can serve both as a portfolio project and as the foundation for a larger production-ready inventory management platform.

---

## 👨‍💻 Author

**Raja Haroon Jamal**

GitHub: `haroondhanyal`

Repository: `Food-InventoryNew`
