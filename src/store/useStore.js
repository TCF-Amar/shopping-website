import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      
      // Add to cart
      addToCart: (product, quantity = 1, selectedSize = null, selectedColor = null) => {
        const { cart } = get();
        const existingItem = cart.find(
          item => 
            item.id === product.id && 
            item.selectedSize === selectedSize && 
            item.selectedColor === selectedColor
        );

        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id &&
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity, selectedSize, selectedColor }],
          });
        }
      },

      // Remove from cart
      removeFromCart: (productId, selectedSize, selectedColor) => {
        set({
          cart: get().cart.filter(
            item =>
              !(item.id === productId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor)
          ),
        });
      },

      // Update quantity
      updateQuantity: (productId, selectedSize, selectedColor, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, selectedSize, selectedColor);
          return;
        }
        set({
          cart: get().cart.map(item =>
            item.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
              ? { ...item, quantity }
              : item
          ),
        });
      },

      // Clear cart
      clearCart: () => set({ cart: [] }),

      // Get cart total
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      // Get cart count
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },

      // User state
      user: null,
      isAuthenticated: false,

      // Login (mock)
      login: (email, password) => {
        // Mock authentication
        const mockUser = {
          email,
          name: email.split('@')[0],
          id: Date.now(),
        };
        set({ user: mockUser, isAuthenticated: true });
        return { success: true, user: mockUser };
      },

      // Signup (mock)
      signup: (email, password, name) => {
        // Mock signup
        const mockUser = {
          email,
          name: name || email.split('@')[0],
          id: Date.now(),
        };
        set({ user: mockUser, isAuthenticated: true });
        return { success: true, user: mockUser };
      },

      // Logout
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      // Dark mode
      darkMode: false,
      toggleDarkMode: () => {
        const newDarkMode = !get().darkMode;
        set({ darkMode: newDarkMode });
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },

      // Recently viewed products
      recentlyViewed: [],
      addToRecentlyViewed: (product) => {
        const { recentlyViewed } = get();
        const filtered = recentlyViewed.filter(p => p.id !== product.id);
        set({
          recentlyViewed: [product, ...filtered].slice(0, 10), // Keep only last 10
        });
      },
    }),
    {
      name: 'ecommerce-store', // localStorage key
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        darkMode: state.darkMode,
        recentlyViewed: state.recentlyViewed,
      }),
    }
  )
);

export default useStore;
