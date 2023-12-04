import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from './productService'

type Product = {
  _id: string
  name: string
  image: string
  description: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

type InitialState = {
  product: Product
  products: Product[]
  isError: boolean
  isLoading: boolean
}

const initialState: InitialState = {
  product: {
    _id: '',
    name: '',
    image: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  products: [],
  isLoading: false,
  isError: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    // fulfilled
    builder.addMatcher(isAnyOf(getProduct.fulfilled), (state, action) => {
      state.isLoading = false
      state.product = action.payload
    })
    builder.addMatcher(isAnyOf(getProducts.fulfilled), (state, action) => {
      state.isLoading = false
      state.products = action.payload
    })

    // pending
    builder.addMatcher(
      isAnyOf(getProduct.pending, getProducts.pending),
      (state) => {
        state.isLoading = true
        state.isError = false
      }
    )

    // rejected
    builder.addMatcher(
      isAnyOf(getProduct.rejected, getProducts.rejected),
      (state) => {
        state.isLoading = false
        state.isError = true
      }
    )
  },
})

export const { reset } = productSlice.actions
export default productSlice.reducer
