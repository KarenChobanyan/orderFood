import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import SubItem from "./SubItem";
import { ItemTotalPriceContext } from "../contexts/ItemToTalPrice"
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { OrderedItemContext } from "../contexts/OrderedItem"
import ItemFooter from "./ItemFooter";
import { useDispatch } from "react-redux";
import { OrderedSubItemsContext } from "../contexts/OrderedSubItems"
import { addOrder } from "../store/actions/OrderActions";

export default function Item({ menu }) {
    const [amount, setAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext)
    const [orderedSubItems, setOrderedSubItems] = useState([])
    const [added, setOrder] = useState()
    const dispatch = useDispatch()
    const orderDate = new Date().getMilliseconds() + Math.random()

    useEffect(() => {
        setOrder(false)
    }, [added])


    const order = useMemo(() => {
        return {
            itemTitle: menu.name,
            itmeImage: menu.images,
            description: menu.description,
            date: orderDate,
            subItem: orderedSubItems
        }

    }, [orderedSubItems])


    const addHendler = useCallback((e) => {
        if (+amount > 0) {
            dispatch(addOrder(order))
            setTotalPrice(prev => +prev + +amount)
            setOrderedSubItems([])
            setOrder(true)
        }
    }, [amount])

    return (
        <ItemTotalPriceContext.Provider value={[amount, setAmount]}>
            <OrderedItemContext.Provider value={added}>
                <OrderedSubItemsContext.Provider value={[orderedSubItems, setOrderedSubItems]}>
                    <div className="item" >
                        <div className="itemImage" style={{ backgroundImage: `url(${menu.images})` }}></div>
                        <div className="itemTExtDiv">
                            <div className="itemTitle">{menu.name}</div>
                            <div className="itemDescription">{menu.description}</div>
                            {menu["sub-items"] ? menu["sub-items"].map((el, index) => <SubItem itemTitle={el.name} price={el.price} key={index + el.price} />) : <SubItem itemTitle={menu.name} price={menu.price} key={menu.index + menu.price} />}
                            <ItemFooter clickHendler={addHendler} />
                        </div>
                    </div>
                </OrderedSubItemsContext.Provider>
            </OrderedItemContext.Provider>
        </ItemTotalPriceContext.Provider>
    )
}