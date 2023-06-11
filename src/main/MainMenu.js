import { Link } from "react-router-dom"

export default function MainMenu() {


    return (
        <>
            <div className="itemList">
                <Link to={`/menu/snaks`}>
                    <div className="optionBig" style={{ backgroundImage: `url(${"https://img.freepik.com/premium-photo/appetizers-table-with-italian-antipasti-snacks-wine-glasses-cheese-wine-salami-prosciutto-black-stone-background-top-view-free-space-your-text_187166-5829.jpg"})` }}><div>Snacks</div></div>
                </Link>
                <Link to={"/menu/sharing platters"}>
                    <div className="optionSmall" style={{ backgroundImage: `url(${"https://img.jamieoliver.com/home/wp-content/uploads/2021/12/EM_21336_Stills_05-1024x683.jpg"})` }}><div>Sharing platters</div> </div>
                </Link>
                <Link to={"/menu/desserts"}>
                    <div className="optionSmall" style={{ backgroundImage: `url(${"https://sterlingsilvermeats.com/wp-content/uploads/2022/12/1720x564_Dec22_Article_1-scaled.jpg"})` }}><div>Desserts</div></div>
                </Link>
                <Link to={"/menu/fast Food"}>
                    <div className="optionBig" style={{ backgroundImage: `url(${"https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg"})` }}><div>Fast Food</div></div>
                </Link>
                <Link to={"/menu/peri-peri chicken"}>
                    <div className="optionBig" style={{ backgroundImage: `url(${"https://i.ytimg.com/vi/h_p17PMsEq8/maxresdefault.jpg"})` }}><div>Peri-peri chicken</div></div>
                </Link>
                <Link to={"menu/side Dishes"}>
                    <div className="optionSmall" style={{ backgroundImage: `url(${"https://cdn.scrambledchefs.com/wp-content/uploads/2021/07/Thanksgiving-Side-Dish-Feature.jpg"})` }}><div>Side Dishes</div></div>
                </Link>
                <Link to={"menu/burgers"}>
                    <div className="optionSmall" style={{ backgroundImage: `url(${"https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock.jpg"})` }}><div>Burgers</div></div>
                </Link>
                <Link to={"menu/salads"}>
                    <div className="optionBig" style={{ backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod/images/strawberry-spinach-salad-vertical-6408a96d5bbd9.jpg?crop=1.00xw:0.401xh;0,0.283xh&resize=1200:*"})` }}><div>Salads</div></div>
                </Link>
            </div>
        </>
    )
}