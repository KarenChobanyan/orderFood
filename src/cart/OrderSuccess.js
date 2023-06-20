import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../store/selectors/selectors";

export default function OrderSuccess(){
    const order = useSelector(history);
    const price = order[0].price
    return (
        <div className="noOrderDiv">
            <div className="successTitle">Your order for {price} has been completed successfully</div>
            <div className="appriciateText">Thanks for choosing us</div>
            <Link to={"/"}>
                <button className="buttonfromCartToMain">Main menu</button>
            </Link>
        </div>
    )
}