
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import { MdAddShoppingCart } from "react-icons/md";
import { showProduct } from "../features/shop/shopSlice";
import ButtonAddToCart from "./buttons/ButtonAddToCart";

const ShopItem = (item: Product) => {
    const { title, image, price} = item;
    const dispatch = useDispatch();
    return (
        <li className="item flex flex-col">

            <button onClick={() => dispatch(showProduct(item))}>
                <img className="w-full h-72 sm:h-80 xs:h-96 md:h-96 rounded-md object-contain border p-2 opacity-80 hover:opacity-100" src={image} alt={title}/>
            </button>

            <div className="item-info-container flex items-end justify-between gap-2">

                <div className="main-info">
                    <h4 className="text-clamp-s">{title}</h4>
                    <p className="font-bold text-clamp-m text-alert">${price}</p>
                </div>

                <ButtonAddToCart item={item} mode={"quick"}/>

            </div>

        </li>
    )
}

export default ShopItem;