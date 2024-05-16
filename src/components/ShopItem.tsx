
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import { MdAddShoppingCart } from "react-icons/md";

const ShopItem = (item: Product) => {
    const { title, image, price} = item;
    const dispatch = useDispatch();
    return (
        <li className="item grid grid-cols-1">

            <img className="w-full h-48 rounded-md object-contain border p-6" src={image} alt={title}/>

            <div className="item-info-container flex items-end justify-between gap-6">

                <div className="main-info">
                    <h4 className="text-xs">{title}</h4>
                    <p className="font-bold text-alert">${price}</p>
                </div>

                <button className="addToCart-btn h-fit border border-black px-3 py-2 rounded-full group/button hover:bg-black" onClick={() => dispatch(addProduct(item))} >
                    <MdAddShoppingCart className="text-black group-hover/button:text-white"/>
                </button>

            </div>

        </li>
    )
}

export default ShopItem;