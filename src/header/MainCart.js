import { useContext } from "react"
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice"
import { TotalOrderCounContext } from "../contexts/TotalOrdersCount";

export default function MainCart(){
    const totalPriceContext = useContext(WholeOrderPriceContext)
    const totalPrice = totalPriceContext[0];
    const orderCountContext = useContext(TotalOrderCounContext)
    const count = orderCountContext[0]
    return(
        <div className="mainCartDiv">
            <div className="mainCartIkon">
                <div className="cartItemCount">{count}</div>
            </div>
            <div className="HeaderItemTotalPrice">Total price : {totalPrice.toFixed(2)}</div>
        </div>
    )
}