import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Container className='p-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/register' element={<Auth />} />
            <Route path='/product/:id' element={<ProductPage />} />
          </Routes>
        </Container>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}
