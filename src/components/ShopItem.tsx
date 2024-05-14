
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";

const ShopItem = (item: Product) => {
    const { title, image, price} = item;
    const dispatch = useDispatch();
    return (
        <li className="item">
            <img className="item-image" src={image} alt={title}/>
            <div className="item-info">
                <h4>{title}</h4>
                <p>${price}</p>
                <button className="addToCart-btn" onClick={() => dispatch(addProduct(item))} >Add to Cart</button>
            </div>
        </li>
    )
}

export default ShopItem;