import { useSelector } from "react-redux"

export default ()=>{
    const data = useSelector(state=>state.history)
    const count = data.length

  return (
    <div className="historyIkonDiv">
    <div className="historyIkon">
        <div className="cartHistoryCount">{count}</div>
    </div>
</div>
  )
}