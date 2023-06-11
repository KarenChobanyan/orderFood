import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";

export default function Header() {
    return (
        <div className="headerPsition">
            <div className="mainHeaderDiv">
                <div className="mainHeader">
                    <div className="headeerLogo"></div>
                    <HeaderTitle />
                    <HeaderNav />
                </div>
            </div>
        </div>
    )
}