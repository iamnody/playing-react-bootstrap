import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import { useSelector } from 'react-redux'
import { RootState } from './redux/_store'
import AdminProductsPage from './pages/AdminProductsPage'
import AdminCreateProductPage from './pages/AdminCreateProductPage'
import AdminUsersPage from './pages/AdminUsersPage'
import AdminUserManagePage from './pages/AdminUserManagePage'
import AdminUpdateProductPage from './pages/AdminUpdateProductPage'
import CartPage from './pages/CartPage'
import AddressPage from './pages/AddressPage'

export default function App() {
  const { user } = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container className='p-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/login'
              element={!user ? <Auth /> : <Navigate to='/' />}
            />
            <Route
              path='/register'
              element={!user ? <Auth /> : <Navigate to='/' />}
            />
            <Route
              path='/profile/:id'
              element={user ? <ProfilePage /> : <Navigate to='/' />}
            />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route
              path='/CartPage/:id?'
              element={user ? <CartPage /> : <Navigate to='/' />}
            />
            <Route
              path='/AddressPage/:id'
              element={user ? <AddressPage /> : <Navigate to='/' />}
            />
            <Route
              path='/paymentPage/:id'
              element={user ? <AddressPage /> : <Navigate to='/' />}
            />
            <Route
              path='/placeOrderPage/:id'
              element={user ? <AddressPage /> : <Navigate to='/' />}
            />
            <Route
              path='/AdminProductsPage'
              element={
                user?.isAdmin ? <AdminProductsPage /> : <Navigate to='/' />
              }
            />
            <Route
              path='/AdminCreateProductPage'
              element={
                user?.isAdmin ? <AdminCreateProductPage /> : <Navigate to='/' />
              }
            />
            <Route
              path='/AdminUpdateProductPage/:id'
              element={
                user?.isAdmin ? <AdminUpdateProductPage /> : <Navigate to='/' />
              }
            />
            <Route
              path='/AdminUsersPage'
              element={user?.isAdmin ? <AdminUsersPage /> : <Navigate to='/' />}
            />
            <Route
              path='/AdminUserManagePage/:id'
              element={
                user?.isAdmin ? <AdminUserManagePage /> : <Navigate to='/' />
              }
            />

            {/* <Route
              path='/AdminOrdersPage'
              element={user?.isAdmin ? <AdminOrders /> : <Navigate to='/' />}
            /> */}
          </Routes>
        </Container>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}
