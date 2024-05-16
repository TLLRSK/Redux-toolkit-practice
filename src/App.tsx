import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from '../node_modules/react-redux/dist/react-redux';
import { getProducts } from './features/shop/shopSlice';
import Home from './Views/Home';
import Cart from './Views/Cart';
import { AppDispatch } from './store';
import './index.css';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
    }, [])
  
  return (
    <>
      <Cart/>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
