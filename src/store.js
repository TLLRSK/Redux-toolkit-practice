import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './features/gallery/gallerySlice'
import cartReducer from './features/cart/cartSlice'
export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    cart: cartReducer,
  },
});