# E-commerce Frontend with React and Vite

This is a modern, responsive e-commerce frontend application built with React, Vite, Redux Toolkit, and Tailwind CSS. It provides a complete shopping experience, from browsing products to checkout.

## Features

- **Product Listings**: Browse products by category with filtering and sorting options.
- **Product Details**: View detailed information for each product, including image galleries, descriptions, and pricing.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items. The cart state is managed globally with Redux Toolkit.
- **Wishlist**: Add products to a personal wishlist for future reference.
- **User Profile**: A dedicated page for user information and settings.
- **Order History**: View a list of past orders with their status.
- **Checkout Process**: A multi-step checkout page for shipping information and order summary.
- **Search Functionality**: A search bar to quickly find products.
- **Responsive Design**: The application is fully responsive and works on all screen sizes, from mobile to desktop.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a quicker and leaner development experience for modern web projects.
- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
- **React Router**: For declarative routing in the application.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Framer Motion**: A production-ready motion library for React.
- **React Icons**: A library of popular icons for React projects.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/TCF-Amar/shopping-website.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd shopping-website
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or the next available port).

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally for preview.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
