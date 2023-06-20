import { CONFIRM_ORDER, PREAPER_ORDER } from "../types/OrderType";
const INIT_STATE = [];
export default (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case PREAPER_ORDER:
            return [...state, payload];
        case CONFIRM_ORDER:
            return []

        default:
            return state;
    }
}