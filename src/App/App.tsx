
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/products/products'
import LayoutClient from './layouts/LayoutClient'
import Contact from './pages/Contact'
import Home from './pages/home'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutClient />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductDetail />} />
            <Route path='contact' element={<Contact />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
