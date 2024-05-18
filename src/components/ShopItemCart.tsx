
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount} from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import ButtonRemoveItem from "./buttons/ButtonRemoveItem";

const ShopItemCart = (item: Product) => {
    const { id, title, image, price, amount} = item;
    const dispatch = useDispatch();
    return (
        <li key={item.id} className="cart-item grid grid-cols-3 gap-x-4">

            <img className="image w-full h-52 sm:h-64 rounded-md object-contain border p-3 col-span-1 bg-white" src={image} alt={title} />

            <div className="item-info flex flex-col col-span-2 justify-between">

                <div className="item-main-info flex flex-col">
                    <h4 className="title text-clamp-m">{title}</h4>
                    <p className="price text-clamp-m font-bold">${price}</p>
                </div>

                <div className="item-amount-info flex justify-between">
                    <div className="item-amount flex gap-3">
                        <button className="btn decrease-btn border border-black px-2 text-clamp-m amount-btn-idle hover:amount-btn-hover" onClick={() => dispatch(decreaseAmount(id))}>-</button>
                        <span className="amount text-m">{amount}</span>
                        <button className="btn increase-btn border border-black px-2 text-clamp-m amount-btn-idle hover:amount-btn-hover" onClick={() => dispatch(increaseAmount(id))}>+</button>
                    </div>
                    <ButtonRemoveItem id={id}/>
                </div>

            </div>

        </li>
    )
}

export default ShopItemCart;