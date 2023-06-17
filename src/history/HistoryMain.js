import { useSelector } from "react-redux"
import HistoryItem from "./HistoryItem";
import NoOrder from "../cart/NoOrder";
import { HISTORY } from "../store/selectors/selectors";

export default () => {
    const data = useSelector(HISTORY)

    return (
        <div className="historyMainDiv">
            {data.length > 0 ? data.map((el) =>
                <HistoryItem
                    time={el.time}
                    price={el.price}
                    key={el.order.date}
                    id={el.id}
                />) :
                <NoOrder text="ORDER HISTORY IS EMPTY" />}
        </div>
    )
}