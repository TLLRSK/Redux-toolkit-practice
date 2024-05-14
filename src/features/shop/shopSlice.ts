import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { Product, shopState } from "../../interfaces/interfaces";


const initialState: shopState= {
    shopList: [],
    amount: 0,
    isLoading: true,
}
export const getProducts = createAsyncThunk<Product[]>(
    'shop/getProducts',
    async () => {
        try {
            const response = await axios<Product[]>({
                method: 'get',
                url: "https://fakestoreapi.com/products",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data: any = await response.data;
            return data;
        } catch (error: any) {
            console.log(error.response)
        }
    }
)

const shopSlice: any = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(getProducts.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state: any, action: PayloadAction<Product[]>) => {
                state.isLoading = false;
                state.shopList = action.payload;
            })
            .addCase(getProducts.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default shopSlice.reducer;