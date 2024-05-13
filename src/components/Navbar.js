import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { setAmount } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
const Navbar = () => {
    const { cartItems, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAmount());
    }, [cartItems]);
    return (_jsxs("nav", { className: "nav-bar", children: [_jsx(Link, { to: "/", className: "link nav-link", children: "Home" }), _jsxs(Link, { to: "/cart", className: "link nav-link", children: [_jsx(IoMdCart, {}), _jsx("span", { className: "cart-amount", children: amount })] })] }));
};
export default Navbar;
