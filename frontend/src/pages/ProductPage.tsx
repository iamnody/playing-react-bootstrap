import { useEffect } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productService'
import { useParams } from 'react-router-dom'

type Props = {}

export default function ProductPage({}: Props) {
  function addToCartHandler() {}

  const dispatch: AppDispatch = useDispatch()
  const { product } = useSelector((state: RootState) => state.products)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id))
    }
  }, [id])

  return (
    <div>
      <Image src={product.image} alt={product.name} fluid />
      <ListGroup className='my-2' variant='flush'>
        <ListGroup.Item>
          <h2>{product.name}</h2>
        </ListGroup.Item>
        <ListGroup.Item>Rating</ListGroup.Item>
        <ListGroup.Item>${product.price}</ListGroup.Item>
        <ListGroup.Item>{product.description}</ListGroup.Item>
      </ListGroup>
      <ListGroup className='my-2' variant=''>
        <ListGroup.Item>
          <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control type='number' value='1' />
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className='btn-block'
            type='button'
            disabled={product.countInStock === 0}
            onClick={addToCartHandler}
          >
            Add To Cart
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <h2>Reviews</h2>
      <h2>Write a Customer Review</h2>
    </div>
  )
}
