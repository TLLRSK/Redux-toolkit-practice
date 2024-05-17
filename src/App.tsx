import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useDispatch } from '../node_modules/react-redux/dist/react-redux';
import { getProducts } from './features/shop/shopSlice';
import Cart from './components/Cart';
import { AppDispatch } from './store';
import './index.css';
import Shop from './Views/Shop';

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
    }, [])
  
  return (
    <>
      <Cart/>
      <Navbar/>
      <Shop/>
    </>
  )
}

export default App
