import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import basketReducer from './slices/basketSlice';
import searchSlice  from './slices/searhSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    basket: basketReducer,
    search: searchSlice,
  },
});

export default store;