import { Link } from "react-router-dom"

export default ({ text }) => {
    return (
        <div className="noOrderDiv">
            <div className="noOrder">{text}</div>
            <Link to={"/"}>
                <button className="buttonfromCartToMain">Main menu</button>
            </Link>
        </div>
    )
}