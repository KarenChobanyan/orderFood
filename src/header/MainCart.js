import { useContext } from "react"
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice"
import { useSelector } from "react-redux";
import { cartList } from "../store/selectors/selectors";

export default function MainCart() {
    const totalPriceContext = useContext(WholeOrderPriceContext)
    const totalPrice = totalPriceContext[0];
    const data = useSelector(cartList)

    return (
        <div className="mainCartDiv">
            <div className="mainCartIkon">
                <div className="cartItemCount">{data ? data.length : 0}</div>
            </div>
            <div className="HeaderItemTotalPrice">Total price : {totalPrice.toFixed(2)}</div>
        </div>
    )
}