
export default function SetCounter(props) {
     const {  count, increaserFn, decreaserFn } = props
    
    return (
        <div className="setCounterDiv">
            <button className="setCounterDecreaser" onClick={decreaserFn}>-</button>
            <div className="setedCount">{count}</div>
            <button className="setCounterIncreaser" onClick={increaserFn}>+</button>
        </div>
    )
}