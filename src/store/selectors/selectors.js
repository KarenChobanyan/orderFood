const menu = (state=>state.menu);
const cartList = (state=>state.cart);
const cartItem = (index => state => state.cart[index])
const history = (state=>state.history);
const historyItem = (id =>state => state.history.filter((el) => el.id === id))
const user = (state=>state.user);
const preaparedOrder = (state => state.preapare);
const inputError = (state => state.error);

export {
    menu,
    cartList,
    cartItem,
    history,
    historyItem,
    user,
    preaparedOrder,
    inputError,
}