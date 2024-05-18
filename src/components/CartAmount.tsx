import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartAmount = () => {
    const {amount} = useSelector((store: any) => store.cart);
    const [isBouncing, setIsBouncing] = useState(false);
    useEffect(() => {
        if (amount > 0) {
            setIsBouncing(true);
            const timeout = setTimeout(() => {
                setIsBouncing(false)
            }, 500)
            return () => clearTimeout(timeout);
        }
    }, [amount])
    return (
        <div className="cart-amount-container absolute top-3 right-3 border flex items-center justify-center bg-white border-black rounded-full w-4 h-4">
            <span className={`cart-amount text-clamp-s ${isBouncing ? 'bounce-once' : ''}`}>{amount}</span>
        </div>
    )
}

export default CartAmount;