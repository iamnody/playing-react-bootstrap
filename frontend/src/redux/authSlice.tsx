import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
  adminManageUser,
  getUser,
  getUsers,
  login,
  logout,
  register,
  updateUser,
} from './authService'
import { toast } from 'react-toastify'

type User =
  | {
      _id: string
      name: string
      email: string
      isAdmin: boolean
      token: string
    }
  | null
  | undefined

type InitialState = {
  user: User
  userDetail: {
    _id: string
    name: string
    email: string
  } | null
  users: User[]
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
// todo
let user = localStorage.getItem('user')

if (user) {
  user = JSON.parse(user)
}

const initialState: InitialState = {
  // todo
  // user: user as User,
  user: user,
  userDetail: null,
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetSuccessState: (state) => {
      state.isSuccess = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          updateUser.fulfilled,
          logout.fulfilled
        ),
        (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        }
      )
      .addMatcher(isAnyOf(getUsers.fulfilled), (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addMatcher(isAnyOf(adminManageUser.fulfilled), (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.userDetail = action.payload
        toast.success('User updated')
      })

    builder.addMatcher(
      isAnyOf(
        register.pending,
        login.pending,
        updateUser.pending,
        getUsers.pending,
        getUser.pending,
        adminManageUser.pending
      ),
      (state) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      }
    )

    builder.addMatcher(
      isAnyOf(
        register.rejected,
        login.rejected,
        updateUser.rejected,
        getUsers.rejected,
        getUser.rejected,
        adminManageUser.rejected
      ),
      (state) => {
        state.isLoading = false
        state.isError = true
      }
    )
  },
})

export const { resetSuccessState } = authSlice.actions
export default authSlice.reducer
