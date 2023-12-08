import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './_store'

const API_URL = '/api/products/'

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

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (
    {
      page = '',
      search = '',
    }: {
      page?: string
      search?: string
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.get(
        API_URL + 'getProducts/' + `?page=${page}&search=${search}`
      )
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (formData: FormData, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      console.log(11)
      await axios.post(API_URL + 'createProduct', formData, config)
      console.log(22)
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (formData: FormData, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      // todo fix this
      // await axios.put(
      //   API_URL + 'updateProduct/' + id,
      //   formData,
      //   config
      // )
    } catch (err) {
      return thunkAPI.rejectWithValue('')
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
