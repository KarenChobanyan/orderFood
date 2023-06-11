import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import SetCounter from "./SetCounter";
import { ItemTotalPriceContext } from "../contexts/ItemToTalPrice";
import { OrderedItemContext } from "../contexts/OrderedItem";
import { OrderedSubItemsContext } from "../contexts/OrderedSubItems";


export default function SubItem(props) {
    const { itemTitle, price } = props
    const [amount, setAmount] = useContext(ItemTotalPriceContext)
    const [orderedSubItems, setOrderedSubItems] = useContext(OrderedSubItemsContext)
    const [count, setCount] = useState(0)
    const orderState = useContext(OrderedItemContext)

   const order = useMemo(()=>{
    return {
        name:itemTitle,
        price:price,
        count:1
    }
   },[])
  

    useEffect(() => {
        setCount(0)
        setAmount(0)
    }, [orderState])

    const increaseCount = useCallback((e) => {
        let tmp = orderedSubItems
        tmp.push(order)
        setOrderedSubItems(tmp)
        setCount(count + 1)
        setAmount((prev) => +prev + +price)
    }, [count]);

    const decreaseCount = useCallback(() => {
        if (+count > 0) {
            let tmp = orderedSubItems
            // tmp.splice(tmp.length,1)
            setOrderedSubItems(tmp)
            setCount(prev => prev - 1)
            setAmount((prev) => +prev - +price)

        }
    }, [count]);

    return (
        <div className="subItem">

            <div className="subItemTitle" >{itemTitle}</div>
            <div className="subItemPrice">{price}</div>
            <SetCounter
                count={count}
                increaserFn={increaseCount}
                decreaserFn={decreaseCount}
            />
        </div>
    )
}


