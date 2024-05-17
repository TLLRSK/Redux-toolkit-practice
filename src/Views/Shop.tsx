
import { useSelector } from "react-redux";
import { Product } from "../interfaces/interfaces.ts";
import { Loading, ShopItem } from "../index.ts";
import ItemModal from "../components/SelectedProduct.tsx";

const Shop = () => {
    const {shopList, showingProduct, selectedProduct, isLoading} = useSelector((store: any) => store.shop)
    return (
        <ul className="shop grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-3 sm:p-4 lg:px-10">
            {isLoading 
                ? <Loading/>
                : shopList.map((item: Product, index: number) => {
                    return (
                        <ShopItem key={index} {...item}/>
                    )
                })
            }
            {showingProduct && selectedProduct && <ItemModal {...selectedProduct}/>}
        </ul>
    )
}
export default Shop;