import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'

type AdminProductFormProps = {
  submitHandler: (
    e: FormEvent<HTMLFormElement>,
    product: {
      name: string
      price: number
      images: File[]
      brand: string
      category: string
      quantity: number
      description: string
    }
  ) => void
  isUpdate?: boolean
  initialProduct?: {
    name: string
    price: number
    images: []
    brand: string
    category: string
    quantity: number
    description: string
  }
}

export default function AdminProductForm({
  submitHandler,
  isUpdate,
  initialProduct,
}: AdminProductFormProps) {
  const [product, setProduct] = useState({
    name: 'a',
    price: 0,
    images: [],
    brand: 'a',
    category: 'a',
    quantity: 0,
    description: 'a',
  })
  const [preview, setPreview] = useState<string[]>([])

  useEffect(() => {
    if (isUpdate && initialProduct) {
      setProduct(initialProduct)
    }
  }, [initialProduct, isUpdate])

  useEffect(() => {
    if (isUpdate) return
    if (!product.images.length) {
      setPreview([])
      return
    }
    const urlArray = product.images.map((x) => URL.createObjectURL(x))
    setPreview(urlArray)
    return () => {
      if (urlArray) {
        urlArray.forEach((x) => URL.revokeObjectURL(x))
      }
    }
  }, [product.images])

  console.log(product.images)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (['price', 'quantity'].includes(e.target.name)) {
      setProduct({ ...product, [e.target.name]: Number(e.target.value) })
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value })
    }
  }

  const handleImagesChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProduct({ ...product, [e.target.name]: Array.from(e.target.files) })
    }
  }

  return (
    <Form onSubmit={(e) => submitHandler(e, product)}>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='name'
          placeholder='Enter name'
          name='name'
          value={product.name}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='price'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter price'
          name='price'
          value={product.price}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className='' controlId='images'>
        <Form.Label>Images</Form.Label>
        <div className='drop-box'>
          <Image src='/cloud.png' fluid />
          <p className='drop-box-text'>Drag & Drop your files here</p>
          <Form.Control
            type='file'
            multiple
            name='images'
            onChange={handleImagesChange}
          />
        </div>
      </Form.Group>
      {preview && (
        <div className='preview'>
          {preview.map((x, i) => (
            <Image className='' key={i} src={x} fluid />
          ))}
        </div>
      )}

      <Form.Group controlId='brand'>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter brand'
          name='brand'
          value={product.brand}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='quantity'>
        <Form.Label>Count In Stock</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter quantity'
          name='quantity'
          value={product.quantity}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='category'>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter category'
          name='category'
          value={product.category}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter description'
          name='description'
          value={product.description}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type='submit' variant='primary' style={{ marginTop: '1rem' }}>
        {isUpdate ? 'Update' : 'Create'}
      </Button>
    </Form>
  )
}
