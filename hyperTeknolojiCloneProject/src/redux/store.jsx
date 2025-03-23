import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'; // productSlice'ı import edin

export const store = configureStore({
  reducer: {
    product: productReducer, // productReducer'ı ekleyin
  },
});

export default store;