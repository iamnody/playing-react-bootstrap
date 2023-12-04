import { FormEvent, useState } from 'react'
import { createProduct } from '../redux/productService'
import { AppDispatch } from '../redux/_store'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AdminProductForm from '../components/AdminProductForm'

type Props = {}
export default function AdminCreateProductPage({}: Props) {
  const [name, setName] = useState('testa')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('a')
  const [category, setCategory] = useState('a')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('aaa')

  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  async function submitHandler(
    e: FormEvent<HTMLFormElement>,
    formData: {
      name: string
      price: number
      image: string
      brand: string
      category: string
      description: string
      countInStock: number
    }
  ) {
    e.preventDefault()
    try {
      await dispatch(createProduct(formData)).unwrap()

      toast.success('Product created')
      navigate('/AdminProductsPage')
    } catch (err) {
      toast.error('Creating product failed')
    }
  }

  return (
    <div>
      <h1>Create Product</h1>
      <AdminProductForm
        submitHandler={submitHandler}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        image={image}
        setImage={setImage}
        brand={brand}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        countInStock={countInStock}
        setCountInStock={setCountInStock}
        description={description}
        setDescription={setDescription}
      />
    </div>
  )
}
