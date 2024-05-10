import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            console.log("clear state: ", state)
        },
        addItem: (state, action) => {
            console.log(action.payload)
            state.cartItems.push(action.payload);
            console.log("state: ", state)
        },
        removeItem: (state, action) => {
            console.log("removing item with id: ", action.payload)
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
})

export const {clearCart, addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;