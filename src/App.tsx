import { Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import Navbar from './components/Navbar';

import { useEffect } from 'react';
import { useDispatch } from '../node_modules/react-redux/dist/react-redux';
import { getProducts } from './features/shop/shopSlice';
import Home from './Views/Home';
import Cart from './Views/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
    }, [])
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
