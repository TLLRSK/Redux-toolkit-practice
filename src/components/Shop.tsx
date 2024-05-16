
import { useSelector } from "react-redux";
import { Product } from "../interfaces/interfaces";
import { Loading, ShopItem } from "../index.ts";

const Shop = () => {
    const {shopList} = useSelector((store: any) => store.shop)
    const {isLoading} = useSelector((store: any) => store.shop)
    return (
        <ul className="shop grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading 
                ? <Loading/>
                : shopList.map((item: Product, index: number) => {
                    return (
                        <ShopItem key={index} {...item}/>
                    )
                })
            }
        </ul>
    )
}
export default Shop;