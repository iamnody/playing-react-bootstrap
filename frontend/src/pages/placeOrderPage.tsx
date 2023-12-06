import { Button } from 'react-bootstrap'

type Props = {}
export default function PlaceOrderPage({}: Props) {
  return (
    <div>
      <h1>Place your order</h1>
      <Button>Place your order</Button>

      <hr />

      <h3>Summary</h3>
      <div>Subtotal(2 items): $50.98</div>
      <div>Shipping & Handling: $0.00</div>
      <div>Estimated Tax: $2.55</div>
      <div>Order Total: $53.53</div>

      <hr />

      <h2>Delivering to XXX</h2>
      <div>123 St 123 Ave, Toronto, Ontario, h2h j2j, Canada </div>
      <div>Change delivery address</div>

      <hr />

      <h2>Paying with Visa 1234</h2>
      <div>Change payment method</div>

      <hr />

      <h2>Items</h2>
      <div>Items</div>

      <hr />

      <Button>Place your order</Button>
    </div>
  )
}
