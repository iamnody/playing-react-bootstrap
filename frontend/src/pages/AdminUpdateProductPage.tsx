import { FormEvent, useEffect, useState } from 'react'
import { getProduct, updateProduct } from '../redux/productService'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import AdminProductForm from '../components/AdminProductForm'

type Props = {}
export default function AdminUpdateProductPage({}: Props) {
  const [name, setName] = useState('testa')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('a')
  const [brand, setBrand] = useState('a')
  const [category, setCategory] = useState('a')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('aaa')

  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const { product } = useSelector((state: RootState) => state.products)

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
      if (!id) {
        throw new Error('Product ID is missing')
      }
      const updatedData = { ...formData, id }
      await dispatch(updateProduct(updatedData)).unwrap()
      toast.success('Product updated')
      // navigate('/AdminProductsPage')
    } catch (err) {
      toast.error('Updating product failed')
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id))
    }
  }, [id, dispatch])

  useEffect(() => {
    setName(product.name)
    setPrice(product.price)
    setImage(product.image)
    setBrand(product.brand)
    setCategory(product.category)
    setCountInStock(product.countInStock)
    setDescription(product.description)
  }, [product])

  return (
    <div>
      <h1>Update Product</h1>
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
        isUpdate
      />
    </div>
  )
}
