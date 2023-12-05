import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/_store'
import { useSelector } from 'react-redux'

type Props = {}
export default function CartPage({}: Props) {
  const { user } = useSelector((state: RootState) => state.auth)
  console.log(user)

  return (
    <div>
      <h1>Shopping cart</h1>
      <ListGroup>
        <ListGroup.Item>
          <h2>Subtotal $50.98</h2>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to={'/AddressPage/' + user?._id}>
            <Button>Proceed to checkout</Button>
          </Link>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>
              <Image src='/images/airpods.jpg' fluid />
            </Col>
            <Col>Airpods Wireless Bluetooth Headphones</Col>
          </Row>
          <Row>
            <Col className='d-flex align-items-center justify-content-center '>
              <button>-</button>
              <Form.Group controlId=''>
                <Form.Control type='number' placeholder='' />
              </Form.Group>
              <button>+</button>
            </Col>
            <Col>Delete</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>
              <Image src='/images/airpods.jpg' fluid />
            </Col>
            <Col>Airpods Wireless Bluetooth Headphones</Col>
          </Row>
          <Row>
            <Col className='d-flex align-items-center justify-content-center '>
              <button>-</button>
              <Form.Group controlId=''>
                <Form.Control type='number' placeholder='' />
              </Form.Group>
              <button>+</button>
            </Col>
            <Col>Delete</Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}
