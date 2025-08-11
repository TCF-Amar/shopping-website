import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlistItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.wishlistItems.find((i) => i.id === item.id);
      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter((i) => i.id !== item.id);
      } else {
        state.wishlistItems.push(item);
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
