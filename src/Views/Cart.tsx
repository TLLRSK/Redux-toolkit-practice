
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import { calculateTotal, decreaseAmount, increaseAmount, removeItem } from "../features/cart/cartSlice";

const Cart = () => {

    const {cartItems, total} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])
    return (
        <section className="cart">
            <ul className="cartList">
                {cartItems.map((item: any) => {
                    const {id, title, price, image, amount} = item;
                    return (
                        <li key={item.id}>
                            <img className="item-image" src={image} alt={title} />
                            <h4 className="item-title">{title}</h4>
                            <p>${price}</p>
                            <div className="item-amount">
                                <button className="btn decrease-btn" onClick={() => dispatch(decreaseAmount(id))}>-</button>
                                <span>{amount}</span>
                                <button className="btn increase-btn" onClick={() => dispatch(increaseAmount(id))}>+</button>
                            </div>
                            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>Remove</button>
                        </li>
                    )
                })}
            </ul>
            <div className="summary">
                <div className="total-container">
                    <h4>Total</h4>
                    <p>{total}</p>
                </div>
            </div>
        </section>
    )
}
export default Cart;