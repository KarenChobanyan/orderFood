import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem";
import { useCallback, useContext } from "react";
import { WholeOrderPriceContext } from "../contexts/WholeOrderPrice";
import { Link } from "react-router-dom";
let cart

export default () => {
    const data = useSelector(state => state)
    const [totalPrice, setTotalPrice] = useContext(WholeOrderPriceContext)
    const dispatch = useDispatch()

    const confirmOrder = useCallback(() => {
        dispatch({
            type: "CONFIRM_ORDER"
        })
        setTotalPrice(0)
    }, [])


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
            <div className="noOrderDiv">
                <div className="noOrder"> YOU HAVE NO ORDERS TO SHOW</div>
                <Link to ={"/"}>
                <button className="buttonfromCartToMain">Main menu</button>
                </Link>
                </div>
                }
            <div className="submitCartOrdeer">
                {cart.length &&
                    <div className="submitOrderInfo" onClick={confirmOrder}>
                        <div>Confirm order for</div>
                        <div>{totalPrice.toFixed(2)}</div>
                    </div>
                }

            </div>
        </div>
    )
}