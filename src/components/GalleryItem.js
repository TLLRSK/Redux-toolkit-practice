import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "../../node_modules/react-redux/dist/react-redux";
import { addItem } from "../features/cart/cartSlice";
const GalleryItem = (item) => {
    const { title, thumbnailUrl } = item;
    const dispatch = useDispatch();
    return (_jsxs("li", { className: "gallery-item", children: [_jsx("img", { className: "item-image", src: thumbnailUrl, alt: title }), _jsxs("div", { className: "item-info", children: [_jsx("h4", { children: title }), _jsx("button", { className: "addToCart-btn", onClick: () => dispatch(addItem(item)), children: "Add to Cart" })] })] }));
};
export default GalleryItem;
