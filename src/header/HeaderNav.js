import { useCallback, useContext, useEffect } from "react"
import { ItemTypeContext } from "../contexts/Item"
import MenuOption from "./MenuOption"
import { FilteredMenuContext } from "../contexts/FilteredMenu"
import MainCart from "./MainCart"

export default function HeaderNav(){
        const [state,setState]  = useContext(ItemTypeContext)
        const menuContext = useContext(FilteredMenuContext)
        const dispatchMenu = menuContext[1]
   

    const clickHendler = useCallback((tetx)=>{
        setState(false)
        dispatchMenu({type:tetx})
    },[state])
    return(
        <>
        <div className="HeaderNavDiv">
           <div className="navLine">
            <div className="navFirst" onClick={()=>setState(true)}>ALL MENU</div>
            <div className="navSecond">CATEGORIES
            <div className="categotyOptions">
      <MenuOption text={"Snacks"} clickHendler={()=>clickHendler("snaks")} key={Math.random()}/>
      <MenuOption text={"Sharing platters"} clickHendler={()=>clickHendler("sharing platters")} key={Math.random()}/>
      <MenuOption text={"Desserts"} clickHendler={()=>clickHendler("desserts")} key={Math.random()}/>
      <MenuOption text={"Fast Food"} clickHendler={()=>clickHendler("fast Food")} key={Math.random()}/>
      <MenuOption text={"Peri-Peri chicken"} clickHendler={()=>clickHendler("peri-peri chicken")} key={Math.random()}/>
      <MenuOption text={"Side Dishes"} clickHendler={()=>clickHendler("side Dishes")} key={Math.random()}/> 
      <MenuOption text={"Burgers"} clickHendler={()=>clickHendler("burgers")} key={Math.random()}/>
      <MenuOption text={"Salads"} clickHendler={()=>clickHendler("salads")} key={Math.random()}/>
                </div>
                </div>
           </div>
                <MainCart/>
        </div>
        <div className="setLanguage"></div>
        </>
    )
}