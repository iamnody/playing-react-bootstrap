import { Button, Col, Row, Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/productService'
import { Link } from 'react-router-dom'

type Props = {}
export default function AdminProductsPage({}: Props) {
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  function createProductHandler() {}

  return (
    <div>
      <Row className='align-items-center my-2'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <Link to='/AdminProductManage'>
            <Button className=''>
              <FaPlus /> Create Product
            </Button>
          </Link>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <Button variant='light' className='btn-sm'>
                    <FaEdit />
                  </Button>
                  <Button variant='danger' className='btn-sm'>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
