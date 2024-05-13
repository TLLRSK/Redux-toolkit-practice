import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
}

const cartSlice: any = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state: any) => {
            state.cartItems = []
        },
        addItem: (state: any, action: any) => {
            state.cartItems.push(action.payload);
        },
        removeItem: (state: any, action: any) => {
            const itemId: any = action.payload;
            console.log("id: ", itemId)
            state.cartItems = state.cartItems.filter((item: any) => item.id !== itemId)
        },
        setAmount: (state) => {
            state.amount = state.cartItems.length;
        }
    }
})

export const {clearCart, addItem, removeItem, setAmount} = cartSlice.actions;

export default cartSlice.reducer;