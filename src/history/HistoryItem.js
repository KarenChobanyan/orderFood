import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { delateOrder } from "../store/actions/OrderActions"

export default (props) => {
    const { time, price, id } = props
    const dispatch = useDispatch()

    const delateItem = useCallback(() => {
        dispatch(delateOrder(id))
    }, [id])
    return (
        <div className="historyItem">
            <div className="historyOrderDate">{time}</div>
            <div className="historyOrderPrice">Total price {price}</div>
            <div className="removeCartItem" onClick={delateItem}></div>
        </div>
    )
}