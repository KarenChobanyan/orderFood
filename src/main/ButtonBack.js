import { useContext } from "react"
import { ItemTypeContext } from "../contexts/Item"

export default function ButtonBack(){
    const context = useContext(ItemTypeContext)
    const setState = context[1]
    return(
        <div className="buttonBack" onClick={()=>setState(true)}></div>
    )
}