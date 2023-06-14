import { CONFIRM_ORDER, DELETE_ORDER } from "../types/OrderType"
const INIT_STATE = []

export default (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case CONFIRM_ORDER:
            return [...state, payload];
        case DELETE_ORDER:
            let tmp = [...state]
            let index = tmp.findIndex((el) => el.id === payload)
            tmp.splice(index, 1)
            return tmp

    }
    return state

}