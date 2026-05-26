

# 🛒 Zustand Shopping Cart with API Integration

A lightweight, high-performance e-commerce mini-application built with React (Vite) and Zustand for state management. This project demonstrates how to handle global local state, persistent state caching, and asynchronous API integration without using heavy boilerplate frameworks like Redux.

✨ Features
Global State Management: Centralized cart and product management using Zustand hooks.

Zero Prop Drilling: Components access store states directly, ensuring clean and maintainable code.

Asynchronous Data Fetching: Integrates with FakeStoreAPI to fetch real-world product catalogs dynamically.

State Persistence: Built-in Zustand middleware to automatically sync cart data with browser localStorage.

Render Tuning & Performance: Optimized state tracking to avoid unnecessary component re-renders.

<img width="1366" height="1298" alt="screencapture-localhost-5173-2026-05-26-13_13_40" src="https://github.com/user-attachments/assets/78d14229-c832-4d19-b489-d087e48437f6" />


🛠️ Project Structure
Plaintext
src/
├── components/          # Shared layout components
├── features/
│   ├── cart/
│   │   └── CartItem.jsx    # Handles cart items display & quantity updates
│   └── products/
│       └── ProductList.jsx # Fetches and displays products from API
├── store/
│   └── useCartStore.js     # Centralized Zustand store with async actions
├── App.jsx                 # Root application setup
└── main.jsx               # Application entry point
🚀 Getting Started
1. Installation
Clone your repository or navigate to your project directory and run the following commands:

Bash
# Install dependencies
npm install

# Install Zustand state management library
npm install zustand
2. Run the Development Server
To launch the application locally, execute:

Bash
npm run dev
Open the local URL (usually http://localhost:5173) in your browser to view the application.
