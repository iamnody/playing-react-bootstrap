import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/_store'

type Props = {}
export default function PaymentPage({}: Props) {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <h1>Payment Method</h1>
      <h2>Add a credit or debit card</h2>
      <h3>Card number</h3>
      <input type='text' placeholder='Card number' />
      <h3>Card number</h3>
      <input type='text' placeholder='MM/YY' />
      <h3>Name on card</h3>
      <input type='text' placeholder='First and last name' />

      <div>
        <Link to={'/PlaceOrderPage/' + user?._id}>
          <Button>Add and continue</Button>
        </Link>
      </div>
    </div>
  )
}
