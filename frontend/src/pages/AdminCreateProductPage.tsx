import { FormEvent } from 'react'
import { createProduct } from '../redux/productService'
import { AppDispatch } from '../redux/_store'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AdminProductForm from '../components/AdminProductForm'

type Props = {}
export default function AdminCreateProductPage({}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

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

    const formData: FormData = new FormData()
    product.images.forEach((x) => formData.append('files', x))
    formData.append('name', product.name)
    formData.append('price', product.price.toString())
    formData.append('brand', product.brand)
    formData.append('category', product.category)
    formData.append('description', product.description)
    formData.append('quantity', product.quantity.toString())

    try {
      console.log(1)
      await dispatch(createProduct(formData)).unwrap()
      console.log(2)
      toast.success('Product created')
      navigate('/AdminProductsPage')
    } catch (err) {
      console.log(3)
      toast.error('Creating product failed')
    }
  }

  return (
    <div>
      <h1>Create Product</h1>
      <AdminProductForm submitHandler={submitHandler} />
    </div>
  )
}
