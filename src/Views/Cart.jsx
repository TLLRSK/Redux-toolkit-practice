import { useSelector } from "react-redux"

const Cart = () => {
    const {cartItems} = useSelector((store) => store.cart);
    console.log(cartItems)
    return (
        <section className="cart">
            <ul className="cartList">
                {cartItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default Cart;