import { useDispatch, useSelector } from "react-redux"
import CartSubItem from "./CartSubItem";
import { useCallback, useContext } from "react";
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { removeOrder } from "../store/actions/OrderActions";
import { cartItem } from "../store/selectors/selectors";

export default (props) => {
    const { image, title, description, index, date } = props
    const data = useSelector(cartItem(index))
    const currentItmetotalPrice = data.subItem.reduce((acc, el) => acc += Number(el.price) * el.count, 0)
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext)
    const dispatch = useDispatch()

    const removeHendler = useCallback(() => {
        const price = totalPrice - currentItmetotalPrice
        setTotalPrice(price)
        dispatch(removeOrder(data.date))

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
            <div className="removeCartItem" onClick={removeHendler}></div>
        </div>
    )
}