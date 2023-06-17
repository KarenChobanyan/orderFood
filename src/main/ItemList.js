import {  useEffect } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import ButtonBack from "./ButtonBack"
import { filterMenu } from "../store/actions/MenuActions"
import { MENU } from "../store/selectors/selectors"

export default function ItemList() {
    const dispatch = useDispatch()
    const { category } = useParams()
    const menu = useSelector(MENU)


    useEffect(() => {
        dispatch(filterMenu(category))
    }, [category])


    return (
        <>
            <div className="itemList">
                <ButtonBack />
                {menu.map((el, index) => <Item menu={el} key={el.id + index} />)}
            </div>
        </>
    )
}