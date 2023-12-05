import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './_store'

const API_URL = '/api/users/'

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (id: string, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      const res = await axios.get(API_URL + 'getUser/' + id, config)
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const getUsers = createAsyncThunk(
  'auth/getUsers',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      const res = await axios.get(API_URL + 'getUsers', config)

      return res.data
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

export const saveAddress = createAsyncThunk(
  'auth/saveAddress',
  async (
    userData: {
      name: string
      phoneNumber: string
      address: string
      city: string
      province: string
      postalCode: string
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
      const response = await axios.post(
        API_URL + 'saveAddress/' + state.auth.user?._id,
        userData,
        config
      )
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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      const res = await axios.put(API_URL + 'updateUser', userData, config)
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const adminManageUser = createAsyncThunk(
  'auth/adminManageUser',
  async (userData: { name: string; email: string; id: string }, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.auth.user?.token,
        },
      }
      const res = await axios.put(
        API_URL + 'adminManageUser/' + userData.id,
        userData,
        config
      )
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)

export const deleteUser = createAsyncThunk(
  'auth/deleteUser',
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.delete(API_URL + 'deleteUser/' + id)
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Authentication failed')
    }
  }
)
