import { useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom"
import { setAmount } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";

const Navbar = () => {
    const {cartItems, amount} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAmount());
    }, [cartItems])

    return (
        <nav className="nav-bar">
            <Link to="/" className="link nav-link"><h1>Fake shop</h1></Link>
            <Link to="/cart" className="link nav-link">
                <IoMdCart />
                <span className="cart-amount">{amount}</span>
            </Link>
        </nav>
    )
}

export default Navbar;