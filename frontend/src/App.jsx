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
import UpdateProduct from './components/Products/UpdateProduct';
import DeleteProduct from './components/Products/DeleteProduct';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Admin from './pages/Admin';

function App() {

  return (
    <>
      <PromoBanner />
      <NavBar />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/products/create' element={<CreateProduct />} />
        <Route exact={true} path='products/delete/:id' element={<DeleteProduct />}></Route>
        <Route exact={true} path='/products/update/:id' element={<UpdateProduct />}></Route>
        <Route exact={true} path='/products/:id' element={<SingleProduct />} />
        <Route exact={true} path='/cart' element={<Cart />} />
        <Route exact={true} path='/signup' element={<SignUp />} />
        <Route exact={true} path='/login' element={<Login />} />
        <Route exact={true} path='/about' element={<About />} />
        <Route exact={true} path='/about/quiz' element={<Quiz />} />
        <Route exact={true} path='/about/results' element={<Results />} />
        <Route exact={true} path='/admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
