import { useEffect } from 'react'
import {
  Accordion,
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productService'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'

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
      <hr />
      <section className='my-2'>
        <Accordion defaultActiveKey={['0', '1']} alwaysOpen flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Write a Customer Review</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className='mb-3' controlId='Rating'>
                  <Form.Label>Rating</Form.Label>
                  <Form.Select aria-label='Default select example'>
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
                  <Form.Control as='textarea' rows={3} />
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
