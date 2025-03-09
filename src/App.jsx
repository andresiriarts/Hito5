import Footer from './assets/components/Footer'
import Login from './assets/pages/Login'
import Navbar from './assets/components/Navbar'
import Register from './assets/pages/Register'
import Home from './assets/pages/Home'
import Cart from './assets/pages/Cart'
import Pizza from './assets/pages/Pizza'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './assets/pages/NotFound'
import Profile from './assets/pages/Profile'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/p001' element={<Pizza />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App