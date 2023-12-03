import { FormEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { adminManageUser, getUser } from '../redux/authService'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { resetSuccessState } from '../redux/authSlice'

type Props = {}

export default function AdminUserManagePage({}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch: AppDispatch = useDispatch()
  const { userDetail, isSuccess } = useSelector(
    (state: RootState) => state.auth
  )
  const { id } = useParams()

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (id) {
      dispatch(adminManageUser({ name, email, id }))
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(getUser(id))
    }
  }, [id, dispatch])

  useEffect(() => {
    if (userDetail) {
      setName(userDetail.name)
      setEmail(userDetail.email)
    }
  }, [userDetail])

  // useEffect(() => {
  //   let isMounted = true
  //   if (isSuccess && isMounted) {
  //     toast.success('User updated')
  //     dispatch(resetSuccessState())
  //   }
  //   return () => {
  //     isMounted = false
  //   }
  // }, [isSuccess, dispatch])

  return (
    <div>
      <h2>Admin Edit User</h2>
      <Form className='my-4' onSubmit={submitHandler}>
        <Form.Group className='mb-2' controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-2' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button className='mt-2' variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
