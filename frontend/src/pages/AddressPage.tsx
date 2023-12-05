import { FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/_store'
import { saveAddress } from '../redux/authService'
import { useNavigate } from 'react-router-dom'

type Props = {}
export default function AddressPage({}: Props) {
  const [name, setName] = useState('aa')
  const [phoneNumber, setPhoneNumber] = useState('456-456')
  const [address, setAddress] = useState('asd')
  const [city, setCity] = useState('das')
  const [province, setProvince] = useState('aaa')
  const [postalCode, setPostalCode] = useState('456dfg')

  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state: RootState) => state.auth)

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(
      saveAddress({ name, phoneNumber, address, city, province, postalCode })
    )
      .unwrap()
      .then(() => {
        navigate('/placeOrderPage/' + user?._id)
      })
  }

  return (
    <div>
      <h1>Shipping Address</h1>
      <Form className='my-4' onSubmit={submitHandler}>
        <Form.Group className='mb-2' controlId='AddressPage-name'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2' controlId='AddressPage-number'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2' controlId='AddressPage-address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2' controlId='AddressPage-city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2' controlId='AddressPage-province'>
          <Form.Label>Province</Form.Label>
          <Form.Control
            type='text'
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2' controlId='AddressPage-postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Button className='mt-2' variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
