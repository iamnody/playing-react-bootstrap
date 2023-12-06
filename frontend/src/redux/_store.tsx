import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import productReducer from './productSlice'
import reviewReducer from './reviewSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
