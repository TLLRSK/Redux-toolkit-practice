import { Product } from "../interfaces/interfaces"
import {ButtonCloseSelectedProduct, ButtonAddToCart } from "../index";

const selectedProduct = (item: Product) => {
    const {image, title, description, price} = item;
    return (
        <article className="selected-product z-10 fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center p-2">
            <div className="product-card relative md:w-3/4 bg-primary flex flex-col md:grid md:grid-cols-2 gap-3 p-4">
                <ButtonCloseSelectedProduct/>

                <div className="product-image flex justify-center max-h-2/4 md:max-h-4/4 p-4">
                    <img src={image} alt={title} className="w-3/4 h-auto object-contain xs:w-2/4 md:w-3/4"/>
                </div>

                <div className="product-info flex flex-col gap-2">
                    <div className="xs:w-2/4">
                        <h3 className="text-l">{title}</h3>
                        <span className="text-l">${price}</span>
                    </div>
                    <div className="description lg:w-3/4">
                        <h5 className="text-m">Description</h5>
                        <p className="text-s">{description}</p>
                    </div>
                </div>

                <ButtonAddToCart item={item} mode={"default"}/>
            </div>
            
            <div className="absolute -z-10 inset-0 overlay flex-1 bg-black opacity-50"/>
           
        </article>
    )
}

export default selectedProduct;