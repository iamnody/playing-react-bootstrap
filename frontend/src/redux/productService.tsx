import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './_store'

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

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (
    productData: {
      name: string
      price: number
      image: {}
      brand: string
      category: string
      description: string
      countInStock: number
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
      await axios.post(API_URL + 'createProduct', productData, config)
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (
    productData: {
      id: string
      name: string
      price: number
      image: {}
      brand: string
      category: string
      description: string
      countInStock: number
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
      console.log(0)
      await axios.put(
        API_URL + 'updateProduct/' + productData.id,
        productData,
        config
      )
      console.log(1)
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.delete(API_URL + 'deleteProduct/' + id)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)
