import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/_store'
import { logout } from '../redux/authService'

type Props = {}
export default function NavbarBs({}: Props) {
  const { user } = useSelector((state: RootState) => state.auth)

  const dispatch: AppDispatch = useDispatch()

  const logoutHandler = async () => {
    dispatch(logout())
  }

  return (
    <nav>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand={true}>
        <Container className='px-4 py-2'>
          <Navbar.Brand>
            <Nav.Link to='/' as={NavLink}>
              Oliver Store
            </Nav.Link>
            {/* <Nav.Link to='/'>Oliver Store</Nav.Link> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=''>
              <Form className='d-flex mt-4 mb-2'>
                <Form.Group className='me-2' controlId='formBasicEmail'>
                  <Form.Control type='text' placeholder='' />
                </Form.Group>

                <Button variant='outline-warning' type='submit'>
                  Search
                </Button>
              </Form>

              {user ? (
                <>
                  <Nav.Link to={'/cartPage/' + user?._id} as={NavLink}>
                    <FaShoppingCart /> Cart
                  </Nav.Link>
                  <NavDropdown title='Account' id='basic-nav-dropdown'>
                    <NavDropdown.Item to={'/profile/' + user._id} as={NavLink}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link to='/login' as={NavLink}>
                  <FaUser /> Sign In
                </Nav.Link>
              )}
              {user?.isAdmin && (
                <NavDropdown title='Admin' id='basic-nav-dropdown'>
                  <NavDropdown.Item to={'AdminProductsPage'} as={NavLink}>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item to={'AdminOrdersPage'} as={NavLink}>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item to={'AdminUsersPage'} as={NavLink}>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}
