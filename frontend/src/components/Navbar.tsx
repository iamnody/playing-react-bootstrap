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
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container className='px-4 py-2'>
          <Navbar.Brand>
            <Nav.Link to='/' as={NavLink}>
              Oliver Store
            </Nav.Link>
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
                  <Nav.Link to='/cart' as={NavLink}>
                    <FaShoppingCart /> Cart
                  </Nav.Link>
                  <NavDropdown title='Account' id='basic-nav-dropdown'>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}
