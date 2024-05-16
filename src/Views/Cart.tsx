
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import { calculateTotal, closeCart } from "../features/cart/cartSlice";
import ShopItemCart from "../components/ShopItemCart";

const Cart = () => {

    const {cartItems, total, amount, isShowing} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])

    return (
        <section className={`cart z-10 fixed top-0 right-0 h-dvh w-4/4 lg:w-2/4 flex flex-col bg-gray p-6 transition-transform gap-6  ${isShowing ? 'translate-x-0 showing' : 'translate-x-100'}`}>

            <div className="cart-header flex justify-between">
                <div className="amount-container">
                    <h2>Your cart:</h2>
                    <span className="amount">{amount} Items</span>
                </div>
                <div className="cart-close-container">
                    <button className="btn close-cart-btn" onClick={() => dispatch(closeCart())}>Close</button>
                </div>
            </div>

            <ul className="cart-list flex-1 flex flex-col gap-6">
                {cartItems.map((item: any) => {
                    return (
                        <ShopItemCart key={item.title} {...item}/>
                    )
                })}
            </ul>

            <div className="summary flex items-end justify-between">
                <div className="total-container">
                    <h4 className="total-header text-2xl">Total</h4>
                    <p className="total text-4xl font-bold">$ {total}</p>
                </div>
                <button className="btn buy-btn color-white h-fit px-8 py-2 bg-black text-white uppercase px-3 font-bold">Buy now</button>
            </div>

        </section>
    )
}
export default Cart;