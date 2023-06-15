export default (props) => {
    const { closeFullItem, data } = props
    return (
        <div className="historyFullItemDiv">
            <div className="historyFullItemCloseDiv">
                <div className="removeCartItem" onClick={closeFullItem}></div>
            </div>
            {data.map((el) =>
                <div className="fullItem" style={{ backgroundImage: `url("${el.itmeImage}")` }} key={el.date}>
                    <div className="fullItemTitle">{el.itemTitle}</div>
                    {el.subItem.map((el) =>
                        <div className="fullSubItem">
                            <div>{el.name}</div>
                            <div>{el.price}</div>
                            <div>{el.count}</div>
                        </div>)}
                </div>
            )}
        </div>
    )
}