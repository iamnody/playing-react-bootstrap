import { FormEvent, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Form } from 'react-bootstrap'
import { login, register } from '../redux/authService'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/_store'

type Props = {}
export default function Auth({}: Props) {
  const [name, setName] = useState('a')
  const [email, setEmail] = useState('a@a.com')
  const [password, setPassword] = useState('123')
  const [confirmPassword, setConfirmPassword] = useState('123')

  const { pathname } = useLocation()
  const isPathnameLogin = pathname === '/login'

  const dispatch: AppDispatch = useDispatch()

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      switch (pathname) {
        case '/login':
          dispatch(login({ email, password }))
          break
        case '/register':
          if (password !== confirmPassword) {
            toast.error('Passwords do not match')
            break
          }
          dispatch(register({ name, email, password }))
          break
      }
    } catch (err) {
      toast.error('Authentication failed')
    }
  }

  return (
    <div>
      <h1>{isPathnameLogin ? 'Sign In' : 'Register'}</h1>
      <Form className='my-4' onSubmit={submitHandler}>
        {!isPathnameLogin && (
          <Form.Group className='mb-2' controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        )}
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
        {!isPathnameLogin && (
          <Form.Group className='mb-2' controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        )}
        <Button className='mt-2' variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
      {isPathnameLogin ? (
        <div>
          New Customer? <Link to='/register'>Register</Link>
        </div>
      ) : (
        <div>
          Already have an account? <Link to='/login'>Login</Link>
        </div>
      )}
    </div>
  )
}
