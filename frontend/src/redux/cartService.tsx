import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from './_store'

const API_URL = '/api/users/'

export const addToCartLocal = createAsyncThunk(
  'auth/addToCartLocal',
  async (
    formData: {
      id: string
      qty: number
      price: number
    },
    thunkAPI
  ) => {
    try {
      let cartData = localStorage.getItem('cart')
      let cart: Array<{ id: string; qty: number; price: number }> = cartData
        ? JSON.parse(cartData)
        : []

      if (!Array.isArray(cart)) {
        throw new Error('Cart is not an array')
      }
      let itemIndex = cart.findIndex((x) => x.id === formData.id)
      if (itemIndex !== -1) {
        cart[itemIndex].qty += formData.qty
      } else {
        cart.push(formData)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    } catch (error: any) {
      console.log(error.stack)
      console.log(error?.response?.data.message || error)
      return thunkAPI.rejectWithValue('')
    }
  }
)

export const addToCart = createAsyncThunk(
  'auth/addToCart',
  async (
    userData: {
      id: string
      qty: number
      price: number
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
      const cart = await axios.post(
        API_URL + 'addToCart/' + state.auth.user?._id,
        userData,
        config
      )
      return cart.data
    } catch (error: any) {
      console.log(error?.response?.data.message || error)
      return thunkAPI.rejectWithValue('')
    }
  }
)
