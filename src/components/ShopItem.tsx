
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const ShopItem = (item: any) => {
    console.log("item: ", item)
    const { title, image, price} = item;
    const dispatch: any = useDispatch();
    return (
        <li className="item">
            <img className="item-image" src={image} alt={title}/>
            <div className="item-info">
                <h4>{title}</h4>
                <p>${price}</p>
                <button className="addToCart-btn" onClick={() => dispatch(addItem(item))} >Add to Cart</button>
            </div>
        </li>
    )
}

export default ShopItem;