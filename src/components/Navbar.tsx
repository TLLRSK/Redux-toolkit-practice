import { useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom"
import { setAmount, showCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";

const Navbar = () => {
    const {cartItems, amount} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAmount());
    }, [cartItems])

    return (
        <nav className="nav-bar sticky top-0 flex justify-between p-3 bg-primary">

            <Link to="/" className="link nav-link"><h1>XOP</h1></Link>

            <button className="relative flex items-center gap-4" onClick={() => dispatch(showCart())}>
                <IoMdCart className="w-6 h-6"/>
                { 
                    amount > 0 && (
                        <div className="absolute -top-3 right-3 border flex items-center justify-center bg-white border-black rounded-full w-6 h-6">
                            <span className="cart-amount">{amount}</span>
                        </div>
                    )
                }
            </button>

        </nav>
    )
}

export default Navbar;