import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

type Props = {
  product: {
    _id: string
    name: string
    images: {
      url: string
    }[]
    description: string
    brand: string
    category: string
    price: number
    quantity: number
    rating: number
    numReviews: number
  }
}

export default function Product({ product }: Props) {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.images[0].url} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.name}`}>
          <Card.Title className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <Rating value={product.rating} number={product.numReviews} />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
