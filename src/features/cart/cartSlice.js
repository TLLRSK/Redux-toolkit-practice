import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            console.log("id: ", itemId);
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        setAmount: (state) => {
            state.amount = state.cartItems.length;
        }
    }
});
export const { clearCart, addItem, removeItem, setAmount } = cartSlice.actions;
export default cartSlice.reducer;
