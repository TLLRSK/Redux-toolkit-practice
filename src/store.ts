import { combineReducers, configureStore } from '@reduxjs/toolkit';
import shopReducer from './features/shop/shopSlice'
import cartReducer from './features/cart/cartSlice'

export interface storeState {
  shop: shopReducer,
  cart: cartReducer,
}
/*
  Combining reducers: https://es.redux.js.org/docs/api/combine-reducers.html
*/
const rootReducer = combineReducers<storeState>({
  shop: shopReducer,
  cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
});