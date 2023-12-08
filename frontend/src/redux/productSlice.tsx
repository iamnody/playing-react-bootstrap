import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getProduct, getProducts } from './productService'

type Product = {
  _id: string
  name: string
  images: []
  description: string
  brand: string
  category: string
  price: number
  quantity: number
  rating: number
  numReviews: number
}

type InitialState = {
  product: Product
  products: Product[]
  page: number
  pages: number
  isError: boolean
  isLoading: boolean
}

const initialState: InitialState = {
  product: {
    _id: '',
    name: '',
    images: [],
    description: '',
    brand: '',
    category: '',
    price: 0,
    quantity: 0,
    rating: 0,
    numReviews: 0,
  },
  products: [],
  page: 0,
  pages: 0,
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
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false
      state.product = action.payload
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload.products
      state.page = action.payload.page
      state.pages = action.payload.pages
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
