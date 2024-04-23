import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Nav/NavBar';

import './App.css';
import PromoBanner from './components/PromoBanner';

function App() {

  return (
    <>
      <PromoBanner />
      <NavBar />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
