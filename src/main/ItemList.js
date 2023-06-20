import { useEffect } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import ButtonBack from "./ButtonBack"
import { filterMenu } from "../store/actions/MenuActions"
import { menu } from "../store/selectors/selectors"

export default function ItemList() {
    const dispatch = useDispatch()
    const { category } = useParams()
    const data = useSelector(menu)


    useEffect(() => {
        dispatch(filterMenu(category))
    }, [category])


    return (
        <>
            <div className="itemList">
                <ButtonBack />
                {data.map((el, index) => <Item menu={el} key={el.id + index} />)}
            </div>
        </>
    )
}