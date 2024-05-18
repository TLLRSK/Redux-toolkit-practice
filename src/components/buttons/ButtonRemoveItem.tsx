
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux"
import { removeItem } from "../../features/cart/cartSlice";

interface Props {
    id: number,
}

const ButtonRemoveItem: React.FC<Props> = ({id}) => {
    const dispatch = useDispatch();
    return (
        <button className="remove-btn " onClick={() => dispatch(removeItem(id))}>
            <RiDeleteBinLine className="w-4 h-4 opacity-50 hover:opacity-100"/>
        </button>
    )
}

export default ButtonRemoveItem;