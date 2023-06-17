import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import { useCallback, useContext, useMemo } from "react";
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { confirmOrder } from "../store/actions/OrderActions";
import { getDate } from "../otherFunctions/getDate";
import NoOrder from "./NoOrder";
import { CART } from "../store/selectors/selectors";
let cart = undefined

export default () => {
    const data = useSelector(CART)
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext)
    const dispatch = useDispatch()

    const order = useMemo(() => {
        return {
            price: totalPrice.toFixed(2),
            time: getDate(),
            order: data,
            id: Math.random()

        }

    }, [])


    const confirmHendler = useCallback(() => {
        dispatch(confirmOrder(order))
        setTotalPrice(0)
    }, [order])


    if (data) {
        cart = [...data]
    };


    return (
        <div className="cartManDiv">

            {cart.length ? cart.map((el, index) => <CartItem
                key={index}
                image={el.itmeImage}
                title={el.itemTitle}
                description={el.description}
                index={index}
                date={el.date}
            />
            ) :
            <NoOrder text = "YOU HAVE NO ORDERS TO SHOW"/>
            }
            <div className="submitCartOrdeer">
                {cart.length &&
                    <div className="submitOrderInfo" onClick={confirmHendler}>
                        <div>Confirm order for</div>
                        <div>{totalPrice.toFixed(2)}</div>
                    </div>
                }

            </div>
        </div>
    )
}