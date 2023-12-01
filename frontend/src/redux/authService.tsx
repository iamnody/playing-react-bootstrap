import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = '/api/users/'

export const login = createAsyncThunk(
  'auth/login',
  async (userData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(API_URL + 'login', userData)
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(API_URL + 'register', userData)
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('user')
  return null
})
