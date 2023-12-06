import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './_store'

const API_URL = '/api/products/reviews/'

export const createReview = createAsyncThunk(
  'reviews/createReview',
  async (
    formData: {
      // rating, comment
      id: string
      rating: number
      comment: string
    },
    thunkAPI
  ) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      const res = await axios.post(
        API_URL + 'createReview/' + formData.id,
        formData,
        config
      )
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)
