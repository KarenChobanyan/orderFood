import { useCallback, useContext, useEffect } from "react"
import { FilteredMenuContext } from "../contexts/FilteredMenu"
import { ItemTypeContext } from "../contexts/Item"

export default function MainMenu() {
    const reducer = useContext(FilteredMenuContext)
    const dispatch = reducer[1]
    const stateContext = useContext(ItemTypeContext)
    const state = stateContext[0]
    const setState = stateContext[1]


    const clickHendler = useCallback((string) => {
        setState(false)
        dispatch({ type: string })
    }, [state])


    return (
        <>
            <div className="optionBig" onClick={() => clickHendler("snaks")} style={{ backgroundImage: `url(${"https://img.freepik.com/premium-photo/appetizers-table-with-italian-antipasti-snacks-wine-glasses-cheese-wine-salami-prosciutto-black-stone-background-top-view-free-space-your-text_187166-5829.jpg"})` }}><div>Snacks</div></div>
            <div className="optionSmall" onClick={() => clickHendler("sharing platters")} style={{ backgroundImage: `url(${"https://img.jamieoliver.com/home/wp-content/uploads/2021/12/EM_21336_Stills_05-1024x683.jpg"})` }}><div>Sharing platters</div> </div>
            <div className="optionSmall" onClick={() => clickHendler("desserts")} style={{ backgroundImage: `url(${"https://sterlingsilvermeats.com/wp-content/uploads/2022/12/1720x564_Dec22_Article_1-scaled.jpg"})` }}><div>Desserts</div></div>
            <div className="optionBig" onClick={() => clickHendler("fast Food")} style={{ backgroundImage: `url(${"https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg"})` }}><div>Fast Food</div></div>
            <div className="optionBig" onClick={() => clickHendler("peri-peri chicken")} style={{ backgroundImage: `url(${"https://i.ytimg.com/vi/h_p17PMsEq8/maxresdefault.jpg"})` }}><div>Peri-peri chicken</div></div>
            <div className="optionSmall" onClick={() => clickHendler("side Dishes")} style={{ backgroundImage: `url(${"https://cdn.scrambledchefs.com/wp-content/uploads/2021/07/Thanksgiving-Side-Dish-Feature.jpg"})` }}><div>Side Dishes</div></div>
            <div className="optionSmall" onClick={() => clickHendler("burgers")} style={{ backgroundImage: `url(${"https://prairiemeats.ca/wp-content/uploads/2019/12/Burger-Stock.jpg"})` }}><div>Burgers</div></div>
            <div className="optionBig" onClick={() => clickHendler("salads")} style={{ backgroundImage: `url(${"https://hips.hearstapps.com/hmg-prod/images/strawberry-spinach-salad-vertical-6408a96d5bbd9.jpg?crop=1.00xw:0.401xh;0,0.283xh&resize=1200:*"})` }}><div>Salads</div></div>
        </>
    )
}