import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { Product, shopState } from "../../interfaces/interfaces";


const initialState: shopState= {
    shopList: [],
    amount: 0,
    isLoading: true,
    selectedProduct: undefined,
    showingProduct: false,
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
    reducers: {
        showProduct: (state, action: PayloadAction<Product>) => {
            state.selectedProduct = action.payload;
            state.showingProduct = true;
        },
        closeProduct: (state) => {
            state.showingProduct = false;
            state.selectedProduct = undefined;
        }
    },
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

export const { showProduct, closeProduct } = shopSlice.actions;

export default shopSlice.reducer;