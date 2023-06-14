import MenuOption from "./MenuOption"
import MainCart from "./MainCart"
import { Link } from "react-router-dom"
import HistoryIkon from "./HistoryIkon"
import { useSelector } from "react-redux"

export default function HeaderNav() {
    const history = useSelector(state=>state.history)

    return (
        <>
            <div className="HeaderNavDiv">
                <div className="navLine">
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <div className="navFirst">ALL MENU</div>
                    </Link>
                    <div className="navSecond">CATEGORIES
                        <div className="categotyOptions">
                            <Link to={`/menu/snaks`} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Snacks"} />
                            </Link>
                            <Link to={"/menu/sharing platters"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Sharing platters"} />
                            </Link>
                            <Link to={"/menu/desserts"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Desserts"} />
                            </Link>
                            <Link to={"/menu/fast Food"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Fast Food"} />
                            </Link>
                            <Link to={"/menu/peri-peri chicken"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Peri-Peri chicken"} />
                            </Link>
                            <Link to={"menu/side Dishes"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Side Dishes"} />
                            </Link>
                            <Link to={"menu/burgers"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Burgers"} />
                            </Link>
                            <Link to={"menu/salads"} style={{ textDecoration: "none" }}>
                                <MenuOption text={"Salads"} />
                            </Link>
                        </div>
                    </div>
                </div>
                    <div className="headerIkonDiv">
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                    <MainCart />
                </Link>
            {history.length>0 &&
            <Link to={"/history"} style={{ textDecoration: "none" }}>
            <HistoryIkon/>
            </Link>
            }   
                </div>
            </div>
            <div className="setLanguage"></div>
        </>
    )
}