
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import { MdAddShoppingCart } from "react-icons/md";
import { showProduct } from "../features/shop/shopSlice";

const ShopItem = (item: Product) => {
    const { title, image, price} = item;
    const dispatch = useDispatch();
    return (
        <li className="item grid grid-cols-1">

            <button onClick={() => dispatch(showProduct(item))}>
                <img className="w-full h-72 sm:h-80 xs:h-96 md:h-96 rounded-md object-contain border p-2" src={image} alt={title}/>
            </button>

            <div className="item-info-container flex items-end justify-between gap-2">

                <div className="main-info">
                    <h4 className="text-s">{title}</h4>
                    <p className="font-bold text-m text-alert">${price}</p>
                </div>

                <button className="addToCart-btn h-fit border border-black px-1 py-1 rounded-full group/button hover:bg-black" onClick={() => dispatch(addProduct(item))} >
                    <MdAddShoppingCart className="text-black group-hover/button:text-primary w-3 h-3"/>
                </button>

            </div>

        </li>
    )
}

export default ShopItem;