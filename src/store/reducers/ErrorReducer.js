import { ADD_ERROR, CLEAR_ERRORS } from "../types/ErrorTypes";

export default (state = [], action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ERROR:
            return [...state, payload]
        case CLEAR_ERRORS:
            return [];
        default:
            return state
    }
};

