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
            state.cartItems = state.cartItems.filter((item: any) => item.id !== itemId)
        },
        setAmount: (state) => {
            state.amount = state.cartItems.length;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item: any) => {
                amount++
                total += item.price;
            })
            state.amount = amount;
            state.total = total.toFixed(2);
        }
    }
})

export const {clearCart, addItem, removeItem, setAmount, calculateTotal} = cartSlice.actions;

export default cartSlice.reducer;