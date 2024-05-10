import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";

const initialState = {
    imagesList: [],
    amount: 0,
    isLoading: true,
}
export const getPhotos = createAsyncThunk(
    'gallery/getPhotos',
    async () => {
        try {
            const response = await axios(baseUrl);
            const data = await response.data;
            console.log(data)
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
            .addCase(getPhotos.pending, () => {
                console.log("pending")
            })
            .addCase(getPhotos.fulfilled, () => {
                console.log("fullfiled")
            })
            .addCase(getPhotos.rejected, () => {
                console.log("rejected")
            })
    }
})

export default gallerySlice.reducer;