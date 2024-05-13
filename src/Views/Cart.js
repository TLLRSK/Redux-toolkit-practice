import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../../node_modules/react-redux/dist/react-redux";
import { removeItem } from "../features/cart/cartSlice";
const Cart = () => {
    const { cartItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    return (_jsx("section", { className: "cart", children: _jsx("ul", { className: "cartList", children: cartItems.map((item) => {
                const { id, title, thumbnailUrl } = item;
                console.log(id);
                return (_jsxs("li", { children: [_jsx("img", { className: "item-image", src: thumbnailUrl, alt: title }), _jsx("h4", { className: "item-title", children: title }), _jsx("button", { className: "remove-btn", onClick: () => dispatch(removeItem(id)), children: "Remove" })] }, item.id));
            }) }) }));
};
export default Cart;
