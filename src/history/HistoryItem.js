import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { delateOrder } from "../store/actions/OrderActions"
import HistoryFullItem from "./HistoryFullItem"
import { historyItem } from "../store/selectors/selectors"

export default (props) => {
    const { time, price, id } = props
    const dispatch = useDispatch()
    const data = useSelector(historyItem(id))
    const [fullItemState, setFullItemState] = useState(false)
    const closeFullItem = useCallback(() => {
        setFullItemState(false)
    }, [fullItemState]);

    const clickHendler = useCallback(() => {
        setFullItemState(true)
    }, [fullItemState]);


    const delateItem = useCallback(() => {
        dispatch(delateOrder(id))
    }, [id])
    return (
        <div className="historyItem">
            <div className="historyItmeFirstLine">
                <div className="historyOrderDate">{time}</div>
                <div className="historyOrderPrice">Total price {price}</div>
                <div className="removeCartItem" onClick={delateItem}></div>
            </div>
            <button className="buttSeeMOre" onClick={clickHendler}>See more ...</button>
            <div className="historyItmeSecondLine">
                {fullItemState && data.map((el,index) =>
                    <HistoryFullItem
                        closeFullItem={closeFullItem}
                        key={el.id + index}
                        data={el.order}
                    />)}
            </div>
        </div>
    )
}