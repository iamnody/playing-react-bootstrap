import { FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

type Props = {}
export default function AdminProductManagePage({}: Props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // try {
    //   await updateProduct({
    //     productId,
    //     name,
    //     price,
    //     image,
    //     brand,
    //     category,
    //     description,
    //     countInStock,
    //   }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
    //   toast.success('Product updated');
    //   refetch();
    //   navigate('/admin/productlist');
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error);
    // }
  }

  return (
    <div>
      <h1>Create Product</h1>
      <Form onSubmit={submitHandler}>
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
          Create
        </Button>
      </Form>
    </div>
  )
}
