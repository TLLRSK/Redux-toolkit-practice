import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const GalleryItem = (item) => {
    const {albumId, id, title, url, thumbnailUrl} = item;
    const dispatch = useDispatch();
    return (
        <li className="gallery-item">
            <img className="item-image" src={thumbnailUrl} alt={title}/>
            <div className="item-info">
                <h4>{title}</h4>
                <button className="addToCart-btn" onClick={() => dispatch(addItem(item))} >Add to Cart</button>
            </div>
        </li>
    )
}

export default GalleryItem;