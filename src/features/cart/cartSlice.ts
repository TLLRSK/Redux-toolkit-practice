import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, cartState } from "../../interfaces/interfaces";

// Estado inicial del carrito
const initialState: cartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isShowing: false,
};

const findItemById = (cartItems: Product[], id: number) => {
  return cartItems.find((item) => item.id === id);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const newItem = { ...action.payload, amount: 1 };
      const existingItem = findItemById(state.cartItems, newItem.id);
      existingItem && existingItem.amount
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
        if (item.amount) {
          amount += item.amount;
        }
      })
      state.amount = amount;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = findItemById(state.cartItems, itemId);;
      existingItem && existingItem.amount > 1
        ? existingItem.amount--
        : state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = findItemById(state.cartItems, itemId);;
      existingItem && existingItem.amount && existingItem.amount++;
      
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        if (item.amount) {
          amount += item.amount;
          total += item.price * item.amount;
        }
      });
      state.amount = amount;
      state.total = Number(total.toFixed(2));
    },
    showCart: (state) => {
      console.log("showing cart")
      state.isShowing = true;
    },
    closeCart: (state) => {
      console.log("open cart")
      state.isShowing = false;
    }
  },
});

export const { clearCart, addProduct, removeItem, setAmount, decreaseAmount, increaseAmount, calculateTotal, showCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
