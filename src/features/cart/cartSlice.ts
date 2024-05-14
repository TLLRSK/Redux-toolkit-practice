import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, cartState } from "../../interfaces/interfaces";

// Estado inicial del carrito
const initialState: cartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const newItem = {...action.payload, amount: 1};
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      existingItem
        ? existingItem.amount++
        : state.cartItems.push(newItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    setAmount: (state) => {
      let amount = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
      })
      state.amount = amount;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      existingItem.amount > 1
        ? existingItem.amount--
        : state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === itemId);
      existingItem.amount++;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price;
      });
      state.amount = amount;
      state.total = Number(total.toFixed(2));
    },
  },
});

export const { clearCart, addProduct, removeItem, setAmount, decreaseAmount, increaseAmount, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
