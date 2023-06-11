export default (props) => {
    const { title, price, count } = props
    return (
        <div className="cartSubItem">
            <div className="cartSubItemTitle">{title}</div>
            <div className="cartSubItemPrice">{price}</div>
            <div className="cartSubItemCount">{count}</div>
        </div>
    )
}