import { Button, Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../redux/productService'
import { Link } from 'react-router-dom'
import { getUsers } from '../redux/authService'

type Props = {}
export default function AdminUsersPage({}: Props) {
  const { users } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((xUser) => {
            if (xUser) {
              return (
                <tr key={xUser._id}>
                  <td>{xUser._id}</td>
                  <td>{xUser.name}</td>
                  <td>${xUser.email}</td>
                  <td>{xUser.isAdmin}</td>
                  <td>
                    <Link to={'/AdminUserManagePage/' + xUser._id}>
                      <Button variant='light' className='btn-sm'>
                        <FaEdit />
                      </Button>
                    </Link>
                    <Button variant='danger' className='btn-sm'>
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              )
            }
          })}
        </tbody>
      </Table>
    </div>
  )
}
