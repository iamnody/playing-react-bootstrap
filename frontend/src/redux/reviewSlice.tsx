import { createSlice } from '@reduxjs/toolkit'
import { createReview } from './reviewService'

type ReviewItem = {
  id: string
  rating: number
  comment: number
}

type InitialState = {
  reviews: ReviewItem[]
}

const initialState: InitialState = {
  reviews: [],
}

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.reviews = action.payload
    })
  },
})

export default reviewSlice.reducer
