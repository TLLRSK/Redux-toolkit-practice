import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState: any = {
    galleryList: [],
    amount: 0,
    isLoading: true,
}
export const getPhotos: any = createAsyncThunk(
    'gallery/getPhotos',
    async () => {
        try {
            const response: any = await axios({
                method: 'get',
                url: "https://jsonplaceholder.typicode.com/albums/1/photos",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    _limit: 2,
                }
            });
            const data: any = await response.data;
            return data;
        } catch (error: any) {
            console.log(error.response)
        }
    }
)

const gallerySlice: any = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(getPhotos.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getPhotos.fulfilled, (state: any, action: any) => {
                state.isLoading = false;
                state.galleryList = action.payload;
            })
            .addCase(getPhotos.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export const { addPhotos } = gallerySlice.actions;

export default gallerySlice.reducer;