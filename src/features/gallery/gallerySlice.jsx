import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/albums/1/photos?_limit=20";

const initialState = {
    galleryList: [],
    amount: 0,
    isLoading: true,
}
export const getPhotos = createAsyncThunk(
    'gallery/getPhotos',
    async () => {
        try {
            const response = await axios(baseUrl);
            const data = await response.data;
            return data;
        } catch (error) {
            console.log(error.response)
        }
    }
)

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.galleryList = action.payload;
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export const { addPhotos } = gallerySlice.actions;

export default gallerySlice.reducer;