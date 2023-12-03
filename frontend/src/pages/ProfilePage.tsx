import { FormEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { AppDispatch, RootState } from '../redux/_store'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/authService'

type Props = {}

export default function ProfilePage({}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch: AppDispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return
      }
      dispatch(updateUser({ name, email, password }))
    } catch (err) {
      toast.error('Authentication failed')
    }
  }

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.name)
    }
  }, [user])

  return (
    <div>
      <h2>User Profile</h2>
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
        <Form.Group className='mb-2' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-2' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button className='mt-2' variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
