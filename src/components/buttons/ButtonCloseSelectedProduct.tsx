import { useDispatch } from "react-redux"
import { closeProduct } from "../../features/shop/shopSlice"

const ButtonCloseSelectedProduct = () => {
    const dispatch = useDispatch();
    return (
        <button className="btn close-product-btn absolute top-4 right-4 text-m" onClick={() => dispatch(closeProduct())}>Close</button>
    )
}

export default ButtonCloseSelectedProduct;