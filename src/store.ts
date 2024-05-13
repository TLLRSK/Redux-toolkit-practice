import { combineReducers, configureStore } from '@reduxjs/toolkit';
import galleryReducer from './features/gallery/gallerySlice'
import cartReducer from './features/cart/cartSlice'

export interface storeState {
  gallery: galleryReducer,
  cart: cartReducer,
}
/*
  Combining reducers: https://es.redux.js.org/docs/api/combine-reducers.html
*/
const rootReducer = combineReducers<storeState>({
  gallery: galleryReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});