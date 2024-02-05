import { FormEvent, useEffect, useState } from 'react'
import { getProduct, updateProduct } from '../redux/productService'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import AdminProductForm from '../components/AdminProductForm'

type Props = {}
export default function AdminUpdateProductPage({}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const { product } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id))
    }
  }, [id, dispatch])

  async function submitHandler(
    e: FormEvent<HTMLFormElement>,
    product: {
      name: string
      price: number
      images: File[]
      brand: string
      category: string
      description: string
      quantity: number
    }
  ) {
    e.preventDefault()
    const updatedData = { ...product, id }
    try {
      // ! todo updateProduct
      // await dispatch(updateProduct(updatedData)).unwrap()
      toast.success('Product updated')
    } catch (error) {
      toast.error('Updating failed')
    }
  }

  return (
    <div>
      <h1>Update Product</h1>
      <AdminProductForm
        submitHandler={submitHandler}
        isUpdate
        initialProduct={product}
      />
    </div>
  )
}
