import { useSelector } from "react-redux"
import { history } from "../store/selectors/selectors"

export default ()=>{
    const data = useSelector(history)
    const count = data.length

  return (
    <div className="historyIkonDiv">
    <div className="historyIkon">
        <div className="cartHistoryCount">{count}</div>
    </div>
</div>
  )
}