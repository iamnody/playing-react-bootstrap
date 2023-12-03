import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = '/api/products/'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL + 'getProducts')
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)
export const getProduct = createAsyncThunk(
  'products/getProduct',
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.get(API_URL + 'getProduct/' + id)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)
