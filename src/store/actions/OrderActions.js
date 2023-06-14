import { OrderTypes } from "../types"
import { CONFIRM_ORDER, DELETE_ORDER } from "../types/OrderType";

const addOrder = (payload) => {
    return {
        type: OrderTypes.ADD_ORDER,
        payload
    }

};

const removeOrder = (id) => {
    return {
        type: OrderTypes.REMOVE_ORDER,
        payload: id
    }

};

const confirmOrder = (order) => {
    return {
        type: CONFIRM_ORDER,
        payload: order
    }

};

const delateOrder = (id) => {
    return {
        type: DELETE_ORDER,
        payload: id

    }
}

export {
    addOrder,
    removeOrder,
    confirmOrder,
    delateOrder
}