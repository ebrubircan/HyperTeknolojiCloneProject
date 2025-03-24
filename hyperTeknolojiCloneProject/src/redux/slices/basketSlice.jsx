import { createSlice } from '@reduxjs/toolkit';

const loadBasketFromStorage = () => {
    try {
      const savedBasket = localStorage.getItem('basket');
      return savedBasket ? JSON.parse(savedBasket) : [];
    } catch (error) {
      console.error('Could not parse basket from localStorage', error);
      return [];
    }
  };

const initialState = {
  items: loadBasketFromStorage(),
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
    loadBasket: (state) => {
        state.items = loadBasketFromStorage();
      },
    decrementQuantity: (state, action) => { 
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('basket', JSON.stringify(state.items));
      }
    },
    incrementQuantity: (state, action) => { 
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
        localStorage.setItem('basket', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('basket', JSON.stringify(state.items));
    },
    clearBasket: (state) => {
      state.items = [];
      localStorage.removeItem('basket');
    }
  }
});

export const { 
  addToBasket, 
  loadBasket,
  decrementQuantity, 
  incrementQuantity, 
  removeItem, 
  clearBasket 
} = basketSlice.actions;

export default basketSlice.reducer;