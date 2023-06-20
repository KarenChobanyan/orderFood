import { useSelector } from "react-redux"
import HistoryItem from "./HistoryItem";
import NoOrder from "../cart/NoOrder";
import { history } from "../store/selectors/selectors";

export default () => {
    const data = useSelector(history)
    return (
        <div className="historyMainDiv">
            {data.length > 0 ? data.map((el) =>
                <HistoryItem
                    time={el.time}
                    price={el.price}
                    key={el.id}
                    id={el.id}
                />) :
                <NoOrder text="ORDER HISTORY IS EMPTY" />}
        </div>
    )
}