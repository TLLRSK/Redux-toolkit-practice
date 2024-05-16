
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount, removeItem } from "../features/cart/cartSlice";
import { Product } from "../interfaces/interfaces";
import { RiDeleteBinLine } from "react-icons/ri";

const ShopItemCart = (item: Product) => {
    const { id, title, image, price, amount} = item;
    const dispatch = useDispatch();
    return (
        <li key={item.id} className="cart-item grid grid-cols-2 gap-6">

            <img className="image w-full h-48 rounded-md object-contain border p-6 bg-white" src={image} alt={title} />

            <div className="item-info flex flex-col justify-between">

                <div className="item-main-info">
                    <h4 className="title text-xs">{title}</h4>
                    <p className="price text-xm font-bold">${price} <span className="text-xs font-medium">/ unit</span></p>
                </div>

                <div className="item-amount-info flex justify-between">
                    <div className="item-amount flex gap-3">
                        <button className="btn decrease-btn border border-black px-2" onClick={() => dispatch(decreaseAmount(id))}>-</button>
                        <span className="amount">{amount}</span>
                        <button className="btn increase-btn border border-black px-2" onClick={() => dispatch(increaseAmount(id))}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => dispatch(removeItem(id))}><RiDeleteBinLine/></button>
                </div>

            </div>

        </li>
    )
}

export default ShopItemCart;