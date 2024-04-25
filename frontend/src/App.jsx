import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Nav/NavBar';

import './App.css';
import PromoBanner from './components/PromoBanner';
import SingleProduct from './pages/SingleProduct';
import CreateProduct from './components/Products/CreateProduct';
import Cart from './pages/Cart';
import SignUp from './components/SignUp';
import Login from './components/LogIn';

function App() {

  return (
    <>
      <PromoBanner />
      <NavBar />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/products/create' element={<CreateProduct />} />
        <Route exact={true} path='/products/:id' element={<SingleProduct />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/signup' element={<SignUp />} />
        <Route exact={true} path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
