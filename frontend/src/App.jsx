import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Nav/NavBar';

import './App.css';
import PromoBanner from './components/PromoBanner';
import SingleProduct from './pages/SingleProduct';
import CreateProduct from './components/Products/CreateProduct';

function App() {

  return (
    <>
      <PromoBanner />
      <NavBar />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/products/create' element={<CreateProduct />} />
        <Route exact={true} path='/products/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
