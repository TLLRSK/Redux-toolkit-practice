import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom"
import { setAmount, showCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import CartAmount from "./CartAmount";

const Navbar = () => {
    const {cartItems, amount} = useSelector((store: any) => store.cart);
    const [isBouncing, setIsBouncing] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAmount());
    }, [cartItems])

    return (
        <nav className="nav-bar z-10 sticky top-0 flex justify-between p-3 bg-primary">

            <Link to="/" className="link nav-link text-xl font-serif"><h1>XOP</h1></Link>

            <button className="relative flex items-center gap-4" onClick={() => dispatch(showCart())}>
                <IoMdCart className="w-4 h-4"/>
                {amount > 0 && <CartAmount/>}
            </button>

        </nav>
    )
}

export default Navbar;