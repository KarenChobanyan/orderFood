import { Link } from "react-router-dom"

export default function ButtonBack(){
    return(
        <Link to={"/"}>
        <div className="buttonBack"></div>
        </Link>
    )
}