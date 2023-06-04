export default function MenuOption({text,clickHendler}){
    return(
        <div className="menuOption" onClick={clickHendler}>{text}</div>
    )
}