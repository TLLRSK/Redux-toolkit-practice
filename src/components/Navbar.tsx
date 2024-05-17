import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom"
import { setAmount, showCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";

const Navbar = () => {
    const {cartItems, amount} = useSelector((store: any) => store.cart);
    const [isBouncing, setIsBouncing] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAmount());
    }, [cartItems])

    useEffect(() => {
        if (amount > 0) {
            setIsBouncing(true);
            console.log("bounce")
            const timeout = setTimeout(() => {
                setIsBouncing(false)
                console.log("no more bounce")
            }, 1000)
            return () => clearTimeout(timeout);
        }
    }, [amount])

    return (
        <nav className="nav-bar sticky top-0 flex justify-between p-3 bg-primary">

            <Link to="/" className="link nav-link text-xl font-serif"><h1>XOP</h1></Link>

            <button className="relative flex items-center gap-4" onClick={() => dispatch(showCart())}>
                <IoMdCart className="w-4 h-4"/>
                { 
                    amount > 0 && (
                        <div className="cart-amount-container absolute top-3 right-3 border flex items-center justify-center bg-white border-black rounded-full w-4 h-4">
                            <span className={`cart-amount text-s ${isBouncing ? 'bounce-once' : ''}`}>{amount}</span>
                        </div>
                    )
                }
            </button>

        </nav>
    )
}

export default Navbar;