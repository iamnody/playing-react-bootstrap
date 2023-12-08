import { Col, Row } from 'react-bootstrap'
import Carousel from '../components/Carousel'
import Product from '../components/Product'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/productService'
import Pagination from '../components/Pagination'
import { useParams } from 'react-router-dom'

type Props = {}

export default function HomePage({}: Props) {
  const { products, page, pages } = useSelector(
    (state: RootState) => state.products
  )
  const dispatch: AppDispatch = useDispatch()

  const { page: pageNumber, search } = useParams()

  useEffect(() => {
    dispatch(getProducts({ page: pageNumber, search }))
  }, [dispatch, pageNumber, search])

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
      <Pagination page={Number(page)} pages={Number(pages)} search={search} />
    </div>
  )
}
