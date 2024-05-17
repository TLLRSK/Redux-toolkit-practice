
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount, removeItem } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import { RiDeleteBinLine } from "react-icons/ri";

const ShopItemCart = (item: Product) => {
    const { id, title, image, price, amount} = item;
    const dispatch = useDispatch();
    return (
        <li key={item.id} className="cart-item grid grid-cols-3 gap-x-4">

            <img className="image w-full h-52 sm:h-64 rounded-md object-contain border p-3 col-span-1 bg-white" src={image} alt={title} />

            <div className="item-info flex flex-col col-span-2 justify-between">

                <div className="item-main-info">
                    <h4 className="title text-m">{title}</h4>
                    <p className="price text-l font-bold">${price} <span className="text-m font-medium">/ unit</span></p>
                </div>

                <div className="item-amount-info flex justify-between">
                    <div className="item-amount flex gap-3">
                        <button className="btn decrease-btn border border-black px-2 text-m" onClick={() => dispatch(decreaseAmount(id))}>-</button>
                        <span className="amount text-m">{amount}</span>
                        <button className="btn increase-btn border border-black px-2 text-m" onClick={() => dispatch(increaseAmount(id))}>+</button>
                    </div>
                    <button className="remove-btn " onClick={() => dispatch(removeItem(id))}><RiDeleteBinLine className="w-4 h-4 opacity-50 hover:opacity-100"/></button>
                </div>

            </div>

        </li>
    )
}

export default ShopItemCart;