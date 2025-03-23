import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  customers: [], 
  loading: false,
  error: null,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getCustomers = createAsyncThunk('getCustomers', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Customer/Get`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    console.log('API Response:', response.data); 
    if (!response.data.success) {
      throw new Error(response.data.message || "API'den veri alınamadı.");
    }
    return response.data.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || "Bir hata oluştu");
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = Array.isArray(action.payload) ? action.payload : [action.payload];
      })
      .addCase(getCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;