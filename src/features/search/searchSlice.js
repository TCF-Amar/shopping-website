import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
  showSearch: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { setSearchTerm, toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
