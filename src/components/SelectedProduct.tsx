import { Product } from "../interfaces/interfaces"
import { addProduct } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { closeProduct } from "../features/shop/shopSlice";

const selectedProduct = (item: Product) => {
    const {image, title, description, price} = item;
    const dispatch = useDispatch();
    return (
        <article className="selected-product z-1 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center p-2">
            <div className="product-card relative bg-primary grid grid-cols-1 gap-3 p-4">
                <button className="btn close-product-btn absolute top-4 right-4 text-m" onClick={() => dispatch(closeProduct())}>Close</button>

                <div className="product-image flex justify-center">
                    <img src={image} alt={title} className="w-3/4 h-auto"/>
                </div>

                <div className="product-info flex flex-col gap-2">
                    <div>
                        <h3 className="text-l">{title}</h3>
                        <span className="text-l">${price}</span>
                    </div>
                    <div className="description">
                        <h5 className="text-m">Description</h5>
                        <p className="text-s">{description}</p>
                    </div>
                </div>

                <button className="addToCart-btn h-fit border border-black px-1 py-1 group/button hover:bg-black" onClick={() => dispatch(addProduct(item))} >
                    <span className="group-hover/button:text-primary text-l">Add to cart</span>
                </button>
            </div>
            
            <div className="absolute -z-10 inset-0 overlay flex-1 bg-black opacity-50">
                
            </div>
        </article>
    )
}

export default selectedProduct;