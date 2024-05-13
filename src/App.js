import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import './scss/styles.scss';
import Navbar from './components/Navbar';
import { getPhotos } from './features/gallery/gallerySlice';
import { useEffect } from 'react';
import { useDispatch } from '../node_modules/react-redux/dist/react-redux';
import Home from './Views/Home';
import Cart from './Views/Cart';
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos());
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) })] })] }));
}
export default App;
