import { Carousel, Image } from 'react-bootstrap'
import products from '../assets/products'

type Props = {}
export default function CarouselBs({}: Props) {
  return (
    <Carousel>
      {products.map((product) => (
        <Carousel.Item key={product.name}>
          <Image
            className='mx-auto d-block'
            src={product.image}
            alt={product.name}
            fluid
          />
          <Carousel.Caption>
            <h3 className='text-white '>
              {product.name} (${product.price})
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
