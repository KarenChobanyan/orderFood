import { useCallback, useContext, useState } from "react";
import SubItem from "./SubItem";
import { ItemTotalPriceContext } from "../contexts/ItemToTalPrice"
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { TotalOrderCounContext } from "../contexts/TotalOrdersCount";
import ItemFooter from "./ItemFooter";

export default function Item({ data }) {
    // const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0);
    const [totalPrice,setTotalPrice] = useContext(WholeOrderPriceContext)
    const [ordersCount,setOrdersCount] = useContext(TotalOrderCounContext)


    const addOrder = useCallback(() => {
        if (+amount > 0) {

            setOrdersCount(prev => +prev + 1)
            setTotalPrice(prev => +prev + +amount)
        }
    }, [amount])
    return (
        <ItemTotalPriceContext.Provider value={[amount, setAmount]}>
            {/* <ItemCountContetx.Provider value={[count, setCount]}> */}
                <div className="item" >
                    <div className="itemImage" style={{ backgroundImage: `url(${data.images})` }}></div>
                    <div className="itemTExtDiv">
                        <div className="itemTitle">{data.name}</div>
                        <div className="itemDescription">{data.description}</div>
                        {data["sub-items"] ? data["sub-items"].map((el) => <SubItem itemTitle={el.name} price={el.price} key={Math.random()} />) : <SubItem itemTitle={data.name} price={data.price} key={Math.random()} />}
                        <ItemFooter clickHendler={addOrder} />
                    </div>
                </div>
            {/* </ItemCountContetx.Provider> */}
        </ItemTotalPriceContext.Provider>
    )
}