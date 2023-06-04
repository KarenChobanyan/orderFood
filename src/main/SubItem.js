import { useCallback, useContext, useReducer, useState } from "react";
import SetCounter from "./SetCounter";
import { ItemTotalPriceContext } from "../contexts/ItemToTalPrice";
import { ItemCountContetx } from "../contexts/ItemCount";

// const reducer = ((state, action) => {
//     switch (action.type) {
//         case "increase":
//             return state + 1
//         case "decrease":
//             return state - 1;
//         default:
//             break;
//     }
// })
export default function SubItem(props) {
    const { itemTitle, price, } = props
    const [amount, setAmount] = useContext(ItemTotalPriceContext)
    // const [count,dispatch] = useReducer(reducer,0)
    const [count, setCount] = useState(0)

    const increaseCount = useCallback(() => {
        setCount(count + 1)
        // dispatch({ type: "increase" })
        setAmount((prev) => +prev + +price)
    }, [count, amount]);

    const decreaseCount = useCallback(() => {
        if (+count > 0) {
            // dispatch({ type: "decrease" })
            // setCount(prev => prev - 1)
            // setAmount((prev)=> +prev - +price)

        }
    }, [count]);

    return (
        <div className="subItem">
            <div className="subItemTitle">{itemTitle}</div>
            <div className="subItemPrice">{price}</div>
            <SetCounter count={count} increaserFn={increaseCount} decreaserFn={decreaseCount} />
        </div>
    )
}


{/* <div className="setCounterDiv">
            <button className="setCounterDecreaser" onClick={deceaseCount} >-</button>
            <div className="setedCount">{count}</div>
            <button className="setCounterIncreaser" onClick={increaseCount}>+</button>
        </div> */}