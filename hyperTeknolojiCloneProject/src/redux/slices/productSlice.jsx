import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: [],
  products: [], 
  loading: false,
  error: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getCategories = createAsyncThunk('getCategories', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Categories`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Bir hata oluştu");
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    combineData: (state) => {
      state.products = state.categories.map((category, index) => ({
        id: index + 1,
        title: category.categoryName,
        price: Math.floor(Math.random() * 100) + 1, 
        image: category.categoryDetail?.categoryMainImage ? category.categoryDetail.categoryMainImage : null
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { combineData } = productSlice.actions;
export default productSlice.reducer;