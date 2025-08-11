import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice.js';
import productReducer from '../features/products/productSlice.js';
import searchReducer from '../features/search/searchSlice.js';
import cartReducer from '../features/cart/cartSlice.js';
import wishlistReducer from '../features/wishlist/wishlistSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productReducer,
    search: searchReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});