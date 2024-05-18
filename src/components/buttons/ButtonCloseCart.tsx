import { useDispatch } from "react-redux"
import { closeCart } from "../../features/cart/cartSlice";

const ButtonCloseCart = () => {
    const dispatch = useDispatch();
    return (
        <button className="btn w-4 h-4 relative flex items-center justify-center" onClick={() => dispatch(closeCart())}>
            <span className="btn-stick absolute w-full h-2px bg-secondary rotate-45"></span>
            <span className="btn-stick absolute w-full h-2px bg-secondary -rotate-45"></span>
        </button>
    )
}

export default ButtonCloseCart;