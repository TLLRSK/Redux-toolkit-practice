
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "../features/cart/cartSlice";
import {ShopItemCart, ButtonCloseCart, ButtonBuy} from "../index";

const Cart = () => {

    const {cartItems, total, amount, isShowing} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])

    return (
        <article className={`cart z-20 fixed top-0 right-0 h-dvh w-4/4 sm:w-3/4 lg:w-2/4 flex flex-col bg-gray p-4 sm:p-4 lg:p-6 transition-transform gap-4 overflow-y-auto border ${isShowing ? 'translate-x-0' : 'translate-x-4/4'}`}>

            <div className="cart-header flex justify-between">
                <div className="amount-container flex items-center gap-1">
                    <h2 className=" text-l">Your cart -</h2>
                    <span className="amount text-l">{amount} Items</span>
                </div>
                <ButtonCloseCart/>
                
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
                <ButtonBuy/>
            </div>

        </article>
    )
}
export default Cart;