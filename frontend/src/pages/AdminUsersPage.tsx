import { Button, Table } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { MouseEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getUsers } from '../redux/authService'

type Props = {}
export default function AdminUsersPage({}: Props) {
  const { users } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch()

  function deleteUserHandler(e: MouseEvent, id: string) {
    e.preventDefault()
    if (window.confirm('Delete this user?')) {
      try {
        dispatch(deleteUser(id)).unwrap()
        dispatch(getUsers())
      } catch (error) {
        console.log(error)
      }
    }
  }

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
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={(e) => deleteUserHandler(e, xUser._id)}
                    >
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
