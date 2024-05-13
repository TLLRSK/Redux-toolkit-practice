
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import { removeItem } from "../features/cart/cartSlice";

const Cart: any = () => {
    const {cartItems} = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    return (
        <section className="cart">
            <ul className="cartList">
                {cartItems.map((item: any) => {
                    const {id, title, thumbnailUrl} = item;
                    console.log(id)
                    return (
                        <li key={item.id}>
                            <img className="item-image" src={thumbnailUrl} alt={title} />
                            <h4 className="item-title">{title}</h4>
                            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default Cart;