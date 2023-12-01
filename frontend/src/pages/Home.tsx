import { Col, Row } from 'react-bootstrap'
import Carousel from '../components/Carousel'
import Product from '../components/Product'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/productService'
import { reset } from '../redux/productSlice'

type Props = {}
export default function Home({}: Props) {
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())

    return () => {
      dispatch(reset())
    }
  }, [])

  return (
    <div>
      <Carousel />
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
