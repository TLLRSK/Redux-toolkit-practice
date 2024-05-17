
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, closeCart } from "../features/cart/cartSlice";
import ShopItemCart from "./ShopItemCart";

const Cart = () => {

    const {cartItems, total, amount, isShowing} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])

    return (
        <article className={`cart z-10 fixed top-0 right-0 h-dvh w-4/4 sm:w-3/4 lg:w-2/4 flex flex-col bg-gray p-4 sm:p-4 lg:p-6 transition-transform gap-4 overflow-y-auto border ${isShowing ? 'translate-x-0' : 'translate-x-4/4'}`}>

            <div className="cart-header flex justify-between">
                <div className="amount-container flex items-center gap-1">
                    <h2 className=" text-l">Your cart -</h2>
                    <span className="amount text-l">{amount} Items</span>
                </div>
                <div className="cart-close-container">
                    <button className="btn w-4 h-4 relative flex items-center justify-center" onClick={() => dispatch(closeCart())}>
                        <span className="btn-stick absolute w-full h-2px bg-secondary rotate-45"></span>
                        <span className="btn-stick absolute w-full h-2px bg-secondary -rotate-45"></span>
                    </button>
                </div>
            </div>

            <ul className="cart-list flex-1 flex flex-col gap-4">
                {cartItems.map((item: any) => {
                    return (
                        <ShopItemCart key={item.title} {...item}/>
                    )
                })}
            </ul>

            <div className="summary flex items-end justify-between">
                <div className="total-container">
                    <h4 className="total-header text-xl">Total</h4>
                    <p className="total text-4xl font-bold">$ {total}</p>
                </div>
                <button className="btn buy-btn color-white h-fit px-4 py-2 bg-black text-white uppercase text-l font-bold">Buy now</button>
            </div>

        </article>
    )
}
export default Cart;