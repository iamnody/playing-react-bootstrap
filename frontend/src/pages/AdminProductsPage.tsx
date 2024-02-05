import { Button, Col, Row, Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { MouseEvent, useEffect } from 'react'
import { deleteProduct, getProducts } from '../redux/productService'
import { Link } from 'react-router-dom'

type Props = {}
export default function AdminProductsPage({}: Props) {
  const { products } = useSelector((state: RootState) => state.products)
  const dispatch: AppDispatch = useDispatch()

  function deleteProductHandler(e: MouseEvent, id: string) {
    e.preventDefault()
    if (window.confirm('Delete this product?')) {
      dispatch(deleteProduct(id))
        .unwrap()
        .then(() => dispatch(getProducts({})))
    }
  }

  useEffect(() => {
    dispatch(getProducts({}))
  }, [dispatch])

  return (
    <div>
      <Row className='align-items-center my-2'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <Link to='/AdminCreateProductPage'>
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
                  <Link to={'/AdminUpdateProductPage/' + product._id}>
                    <Button variant='light' className='btn-sm'>
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={(e) => deleteProductHandler(e, product._id)}
                  >
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
