# Tha Suavepreneur - Shopping Cart

🛍️ An e-commerce shopping cart solution for a premium modest fashion brand based in Lagos, Nigeria.

## Features

- 🏠 Home page with brand showcase
- 🛒 Product shop page with dynamic cards
- 📦 Cart management with real-time updates
- ➕➖ Quantity increment/decrement controls
- 📱 Fully responsive design
- 🧪 Comprehensive unit testing with Vitest
- 🎨 Material UI components with custom CSS modules
- 🔄 React Router for seamless navigation
- 📊 Live cart count indicator

## Tech Stack

- React 19 with Vite
- React Router DOM v6
- Material UI (MUI)
- Lucide React Icons
- CSS Modules
- Vitest + React Testing Library

## Brand Details

**Tha Suavepreneur**

- Modest outfits | Made to measure | Tailoring brand
- Lagos, Nigeria
- Classy and elegant modest fashion

tha-suavepreneur-shopping-cart/
├── public/
│ └── \_redirects
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Navbar/
│ │ │ ├── Navbar.jsx
│ │ │ └── Navbar.module.css
│ │ ├── ProductCard/
│ │ │ ├── ProductCard.jsx
│ │ │ └── ProductCard.module.css
│ │ └── CartItem/
│ │ ├── CartItem.jsx
│ │ └── CartItem.module.css
│ ├── pages/
│ │ ├── Home/
│ │ │ ├── Home.jsx
│ │ │ └── Home.module.css
│ │ ├── Shop/
│ │ │ ├── Shop.jsx
│ │ │ └── Shop.module.css
│ │ └── Cart/
│ │ ├── Cart.jsx
│ │ └── Cart.module.css
│ ├── context/
│ │ └── CartContext.jsx
│ ├── services/
│ │ └── api.js
│ ├── test/ # All tests centralized here
│ │ ├── setup.js
│ │ ├── components/
│ │ │ ├── Navbar.test.jsx
│ │ │ ├── ProductCard.test.jsx
│ │ │ └── CartItem.test.jsx
│ │ ├── pages/
│ │ │ ├── Home.test.jsx
│ │ │ ├── Shop.test.jsx
│ │ │ └── Cart.test.jsx
│ │ ├── context/
│ │ │ └── CartContext.test.jsx
│ │ └── services/
│ │ └── api.test.js
│ ├── App.jsx
│ ├── App.module.css
│ ├── Routes.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vitest.config.js
├── vercel.json
└── .gitignore
