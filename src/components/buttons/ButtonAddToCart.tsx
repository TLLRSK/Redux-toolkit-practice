import { useDispatch } from "react-redux"
import { addProduct } from "../../features/cart/cartSlice"
import { Product } from "../../interfaces/interfaces";
import { MdAddShoppingCart } from "react-icons/md";

interface ButtonAddToCartProps {
    item: Product;
    mode: string;
  }

  const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ item, mode }) => {
    const dispatch = useDispatch();
    switch(mode) {
        case "default":
            return (
                <button className="addtocart-btn h-fit sm:col-start-2 border border-black px-1 py-1 group/button hover:bg-black :" onClick={() => dispatch(addProduct(item))} >
                    <span className="group-hover/button:text-primary text-l">Add to cart</span>
                </button>
            );
        case "quick":
            return (
                <button className="addtocart-btn h-fit border border-black px-3 py-1 rounded-full group/button hover:bg-black" onClick={() => dispatch(addProduct(item))} >
                    <MdAddShoppingCart className="text-black group-hover/button:text-primary w-3 h-3"/>
                </button>
            )
        default:
            return null;
    }
}

export default ButtonAddToCart;