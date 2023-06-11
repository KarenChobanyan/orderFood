import { useDispatch, useSelector } from "react-redux"
import CartSubItem from "./CartSubItem";
import { useCallback, useContext } from "react";
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";

export default (props) => {
    const { image, title, description, index, date } = props
    const data = useSelector(state => state[index])
    const currentItmetotalPrice = data.subItem.reduce((acc, el) => acc += Number(el.price), 0)
    console.log(currentItmetotalPrice);
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext)
    const dispatch = useDispatch()

    const removeOrder = useCallback(() => {
        const price = totalPrice - currentItmetotalPrice
        setTotalPrice(price)
        dispatch({
            type: "Remove_Order",
            payload: date
        });
    }, [totalPrice])

    return (
        <div className="cartItem">
            <div className="cartItemImage" style={{ backgroundImage: `url("${image}")` }}></div>
            <div className="cartItemText">
                <div className="cartItemTitle">{title}</div>
                <div className="cartItemDescription">{description}</div>
                {data.subItem.map((el, index) =>
                    <CartSubItem
                        title={el.name}
                        price={el.price}
                        count={el.count}
                        key={index}
                    />)}
                <div className="cartItemTotalPrceDiv">
                    <div className="cartItemTotalPriceText">Total price: {currentItmetotalPrice}</div>
                </div>
            </div>
            <div className="removeCartItem" onClick={removeOrder}></div>
        </div>
    )
}