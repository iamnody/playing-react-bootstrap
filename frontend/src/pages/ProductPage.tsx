import { FormEvent, useEffect, useState } from 'react'
import { Accordion, Button, Col, Form, Image, ListGroup } from 'react-bootstrap'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productService'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { addToCart, addToCartLocal } from '../redux/cartService'
import { createReview } from '../redux/reviewService'

type Props = {}

export default function ProductPage({}: Props) {
  const [qty, setQty] = useState(0)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('test111')

  const dispatch: AppDispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)
  const { product } = useSelector((state: RootState) => state.products)

  const { id } = useParams()

  function addToCartHandler() {
    if (user) {
      dispatch(addToCart({ id: product._id, qty, price: product.price }))
    } else {
      dispatch(addToCartLocal({ id: product._id, qty, price: product.price }))
    }
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(createReview({ id: product._id, rating, comment }))
  }

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id))
    }
  }, [id])

  return (
    <div>
      <Image src={product.images[0]?.url} alt={product.name} fluid />
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
          <Col>{product.quantity > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Control
            type='number'
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            className='btn-block'
            type='button'
            disabled={product.quantity === 0}
            onClick={addToCartHandler}
          >
            Add To Cart
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <hr />
      <section className='my-2'>
        <Accordion defaultActiveKey={['0', '1']} alwaysOpen flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Write a Customer Review</Accordion.Header>
            <Accordion.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='Rating'>
                  <Form.Label>Rating</Form.Label>
                  <Form.Select
                    aria-label='Default select example'
                    required
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  >
                    <option>Select</option>
                    <option value='3'>5 - Good</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1 - Bad</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.Comment'>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          {/* <hr /> */}

          <Accordion.Item eventKey='1'>
            <Accordion.Header>Reviews</Accordion.Header>
            <Accordion.Body>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <div>
                    <strong>title</strong>
                  </div>
                  <div>
                    <Rating value={4} number={10} />
                  </div>
                  <div>2023-12-04</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt iusto quis delectus
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div>
                    <strong>title</strong>
                  </div>
                  <div>
                    <Rating value={4} number={10} />
                  </div>
                  <div>2023-12-04</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt iusto quis delectus
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </div>
  )
}
