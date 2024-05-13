
import { useSelector } from "react-redux";
import Loading from "./Loading";
import ShopItem from "./ShopItem";

const Shop = () => {
    const {shopList} = useSelector((store: any) => store.shop)
    const {isLoading} = useSelector((store: any) => store.shop)
    return (
        <ul className="shop">
            {isLoading 
                ? <Loading/>
                : shopList.map((item: any, index: number) => {
                    return (
                        <ShopItem key={index} {...item}/>
                    )
                })
            }
        </ul>
    )
}
export default Shop;