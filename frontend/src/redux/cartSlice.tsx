import { createSlice } from '@reduxjs/toolkit'
import { addToCart, addToCartLocal } from './cartService'

type CartItem = {
  id: string
  qty: number
  price: number
}

type InitialState = {
  cart: CartItem[]
}

let cart: CartItem[] = []
try {
  cart = JSON.parse(localStorage.getItem('cart') || '[]')
} catch (error) {
  localStorage.removeItem('cart')
}

const initialState: InitialState = {
  cart,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartLocal.fulfilled, (state, action) => {
      state.cart = action.payload
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart = action.payload
    })
  },
})

export default cartSlice.reducer
