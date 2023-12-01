import { createSlice } from '@reduxjs/toolkit'
import { login, logout } from './authService'

let user = localStorage.getItem('user')
if (user) {
  user = JSON.parse(user)
}

type InitialState = {
  user: any | null
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
}

const initialState: InitialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.user = null
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
})

export default authSlice.reducer
