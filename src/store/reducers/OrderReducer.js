import { ADD_ORDER, CONFIRM_ORDER, REMOVE_ORDER } from "../types/OrderType";

const INIT_STATE = []
export default (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ORDER:
            return [...state, payload];
        case REMOVE_ORDER:
            const tmp = [...state]
            const index = tmp.findIndex((el) => el.date === payload)
            tmp.splice(index, 1)
            return tmp;
        case CONFIRM_ORDER:
            return INIT_STATE;
            default:
            return state
    }
}