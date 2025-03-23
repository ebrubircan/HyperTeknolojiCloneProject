import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default appSlice.reducer; 