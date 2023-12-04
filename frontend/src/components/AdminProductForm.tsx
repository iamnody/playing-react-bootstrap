import { FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'

type AdminProductFormProps = {
  submitHandler: (
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
  ) => void // or Promise<void> if the function is async
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  price: number
  setPrice: React.Dispatch<React.SetStateAction<number>>
  image: string
  setImage: React.Dispatch<React.SetStateAction<string>>
  brand: string
  setBrand: React.Dispatch<React.SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  countInStock: number
  setCountInStock: React.Dispatch<React.SetStateAction<number>>
  isUpdate?: boolean
}

export default function AdminProductForm({
  submitHandler,
  name,
  setName,
  price,
  setPrice,
  image,
  setImage,
  brand,
  setBrand,
  category,
  setCategory,
  description,
  setDescription,
  countInStock,
  setCountInStock,
  isUpdate,
}: AdminProductFormProps) {
  return (
    <Form
      onSubmit={(e) =>
        submitHandler(e, {
          name,
          price,
          image,
          brand,
          category,
          description,
          countInStock,
        })
      }
    >
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='name'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='price'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter price'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>

      {/* <Form.Group controlId='image'>
    <Form.Label>Image</Form.Label>
    <Form.Control
      type='text'
      placeholder='Enter image url'
      value={image}
      onChange={(e) => setImage(e.target.value)}
    ></Form.Control>
    <Form.Control
      label='Choose File'
      onChange={uploadFileHandler}
      type='file'
    ></Form.Control>
  </Form.Group> */}

      <Form.Group controlId='brand'>
        <Form.Label>Brand</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter brand'
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='countInStock'>
        <Form.Label>Count In Stock</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter countInStock'
          value={countInStock}
          onChange={(e) => setCountInStock(Number(e.target.value))}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='category'>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type='submit' variant='primary' style={{ marginTop: '1rem' }}>
        {isUpdate ? 'Update' : 'Create'}
      </Button>
    </Form>
  )
}
