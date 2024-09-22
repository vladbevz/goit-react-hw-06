// src/redux/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експорт екшену
export const { changeFilter } = filtersSlice.actions;

// Селектор для вибірки значення фільтра
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;