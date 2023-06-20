export default (props) => {
    const { closeFullItem, data } = props
    return (
        <div className="historyFullItemDiv">
            <div className="historyFullItemCloseDiv">
                <div className="removeCartItem" onClick={closeFullItem}></div>
            </div>
            {data.map((el, index) =>
                <div className="fullItem" style={{ backgroundImage: `url("${el.itmeImage}")` }} key={el.date + index}>
                    <div className="fullItemTitle">{el.itemTitle}</div>
                    {el.subItem.map((el, index) =>
                        <div className="fullSubItem" key={el.date + index}>
                            <div>{el.name}</div>
                            <div>{el.price}</div>
                            <div>{el.count}</div>
                        </div>)}
                </div>
            )}
        </div>
    )
}