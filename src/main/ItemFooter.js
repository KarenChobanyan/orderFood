import { useContext } from "react"
import { ItemTotalPriceContext } from "../contexts/ItemToTalPrice"

export default function ItemFooter({ clickHendler }) {
    const [amount, setAmount] = useContext(ItemTotalPriceContext)
    return (
        <div className="itemFootter">
            <div className="itemTotalPrice">Total price : {amount.toFixed(2)}</div>
            <div className="itemCart" onClick={clickHendler}></div>
        </div>
    )
}