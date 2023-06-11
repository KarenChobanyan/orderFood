import { useContext, useEffect } from "react"
import { FilteredMenuContext } from "../contexts/FilteredMenu"
import Item from "./Item"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import ButtonBack from "./ButtonBack"

export default function ItemList() {
    const reducer = useContext(FilteredMenuContext)
    const dispatch = reducer[1]
    const menuContext = useContext(FilteredMenuContext)
    const menu = menuContext[0]
    const { category } = useParams()


    useEffect(() => {
        dispatch({ type: category })
    }, [category])

    const cart = useSelector(state => state)

    return (
        <>
            <div className="itemList">
                <ButtonBack />
                {menu.map((el, index) => <Item menu={el} key={el.id + index} />)}
            </div>
        </>
    )
}