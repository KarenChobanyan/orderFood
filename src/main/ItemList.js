import { useContext } from "react"
import { ItemTypeContext } from "../contexts/Item"
import MainMenu from "./MainMenu"
import { FilteredMenuContext } from "../contexts/FilteredMenu"
import Item from "./Item"

export default function ItemList(){
    const stateContext = useContext(ItemTypeContext)
    const state = stateContext[0]
    const menuContext = useContext(FilteredMenuContext)
    const menu = menuContext[0]
    return(
        <div className="itemList">
         {state==true?<MainMenu/>:menu.map((el)=><Item data={el} key={el.id + Math.random()}/>)}
        </div>
    )
}