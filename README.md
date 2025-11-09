# 🛍️ ShopHub - Modern E-Commerce Store

A fully responsive, feature-rich e-commerce website built with **React (Vite)**, **Tailwind CSS**, and **Zustand** for state management. This project includes authentication UI, cart management, and a complete shopping experience.

## ✨ Features

### 🎯 Core Functionality
- **100 Products** - Static product data stored in `products.json`
- **Smart Search & Filters** - Search by name/tags, filter by category, price, and rating
- **Product Sorting** - Sort by price, rating, name, or featured
- **Shopping Cart** - Add/remove items with quantity control (stored in localStorage)
- **Responsive Design** - Mobile-first design that works on all devices
- **Dark/Light Mode** - Toggle between themes with persistent preference


### 🔐 Authentication (Mock UI)
- Login, Signup, and Forgot Password pages
- Firebase Auth integration placeholders
- LocalStorage-based session management
- Profile page with order history

### 🛒 Shopping Experience
- **Home Page** - Hero banner, featured products, trending items, category showcase
- **Product Listing** - Grid layout with advanced filtering and sorting
- **Product Detail** - Image gallery, size/color selection, quantity picker
- **Cart Page** - Full cart management with subtotal calculation
- **Checkout Page** - Mock checkout form with order summary
- **Order Confirmation** - Success page after checkout

### 🎨 Design Highlights
- Clean, modern UI with Tailwind CSS
- Custom color scheme with primary blue tones
- Smooth transitions and hover effects
- Loading states and empty states
- Accessible form inputs and buttons

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd ecommerce-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
ecommerce-store/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx       # Navigation bar with search and cart
│   │   ├── Footer.jsx       # Footer with links and newsletter
│   │   ├── ProductCard.jsx  # Product display card
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Products.jsx     # Product listing with filters
│   │   ├── ProductDetail.jsx # Individual product page
│   │   ├── Cart.jsx         # Shopping cart
│   │   ├── Checkout.jsx     # Checkout form
│   │   ├── Login.jsx        # Login page
│   │   ├── Signup.jsx       # Signup page
│   │   ├── Profile.jsx      # User profile and orders
│   │   └── OrderConfirmation.jsx # Order success page
│   ├── store/               # State management
│   │   └── useStore.js      # Zustand store (cart, user, dark mode)
│   ├── utils/               # Utility functions
│   │   └── recommendations.js
│   ├── data/                # Static data
│   │   └── products.json    # 100 product entries
│   ├── config/              # Configuration files
│   │   └── firebase.js      # Firebase config placeholder
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS and global styles
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🔧 Configuration

### Adding Firebase Authentication

1. **Create a Firebase project** at [Firebase Console](https://console.firebase.google.com/)

2. **Enable Authentication** and choose your preferred sign-in methods

3. **Get your Firebase config** from Project Settings

4. **Update** `src/config/firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. **Install Firebase:**
   ```bash
   npm install firebase
   ```

6. **Uncomment the Firebase initialization code** in `src/config/firebase.js`

### Adding More Products

Edit `src/data/products.json` and add new entries following this structure:

```json
{
  "id": 101,
  "title": "Product Name",
  "price": 99.99,
  "category": "Electronics",
  "tags": ["tag1", "tag2", "tag3"],
  "rating": 4.5,
  "description": "Detailed product description",
  "images": ["https://picsum.photos/seed/prod101/800/800"],
  "stock": 50,
  "sizes": ["S", "M", "L"],
  "colors": ["Black", "White"]
}
```

**Product Image Guidelines:**
- Use [picsum.photos](https://picsum.photos/) for placeholder images
- Format: `https://picsum.photos/seed/{unique-seed}/800/800`
- Recommended size: 800x800px


### Current Implementation (Rule-Based)

The recommendation engine (`src/utils/recommendations.js`) uses a scoring algorithm that considers:

1. **Category Match** (50 points) - Highest priority
2. **Tag Overlap** (10 points per common tag)
3. **Price Similarity** (20 points if within 30% range)
4. **Rating Proximity** (10 points if ratings are close)

### Integration Points

**Home Page Recommendations:**
```javascript
<RecommendedProducts
  allProducts={productsData}
  recentlyViewed={recentlyViewed}
  title="Recommended for You"
/>
```

**Product Detail Page Recommendations:**
```javascript
<RecommendedProducts
  currentProduct={product}
  allProducts={productsData}
  title="You Might Also Like"
/>
```



## 🎨 Customization

### Changing the Color Scheme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',   // Lightest
        // ... customize all shades
        900: '#0c4a6e',  // Darkest
      },
    },
  },
}
```

### Modifying Product Categories

1. Update the product categories in `src/data/products.json`
2. Update the category links in:
   - `src/components/Navbar.jsx` (Categories Bar)
   - `src/pages/Home.jsx` (Categories Section)

## 📦 State Management

The app uses **Zustand** for state management with **localStorage persistence**.

**Managed State:**
- 🛒 Shopping cart (items, quantities, selections)
- 👤 User authentication (mock)
- 🌓 Dark mode preference
- 👁️ Recently viewed products (for recommendations)

**Key Functions:**
```javascript
const { 
  cart, 
  addToCart, 
  removeFromCart, 
  updateQuantity,
  getCartTotal,
  user,
  login,
  logout,
  darkMode,
  toggleDarkMode
} = useStore();
```

## 🌐 Routing

Built with **React Router DOM v6**:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/products` | Products | Product listing with filters |
| `/products?search=term` | Products | Search results |
| `/products?category=Name` | Products | Category filtered |
| `/product/:id` | ProductDetail | Single product page |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Checkout form |
| `/login` | Login | Login page |
| `/signup` | Signup | Registration page |
| `/profile` | Profile | User profile |
| `/order-confirmation` | OrderConfirmation | Order success |

## 🔍 SEO Considerations

For production deployment:

1. **Add React Helmet** for dynamic meta tags:
   ```bash
   npm install react-helmet-async
   ```

2. **Implement meta tags** on each page:
   ```javascript
   <Helmet>
     <title>{product.title} - ShopHub</title>
     <meta name="description" content={product.description} />
   </Helmet>
   ```

3. **Consider SSR** with Next.js for better SEO if needed

## 📱 Responsive Breakpoints

Tailwind CSS default breakpoints used:

- **sm:** 640px (Mobile landscape)
- **md:** 768px (Tablet)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)
- **2xl:** 1536px (Extra large desktop)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://app.netlify.com/drop)

## 🧪 Testing

To add testing:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Create test files alongside components:
```
ProductCard.test.jsx
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3
- **State Management:** Zustand
- **Routing:** React Router DOM v6
- **Icons:** Heroicons (via Tailwind)
- **Image Placeholders:** Picsum Photos
- **Authentication (Ready):** Firebase Auth
- **Storage:** LocalStorage (cart, user session)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new features
- Fix bugs
- Enhance the UI/UX

## 💡 Future Enhancements

- [ ] Backend API integration
- [ ] Real payment processing (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Admin dashboard for product management
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
