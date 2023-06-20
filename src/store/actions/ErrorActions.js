import { ADD_ERROR, CLEAR_ERRORS } from "../types/ErrorTypes";

function addInputError(payload){
    return {
        type:ADD_ERROR,
        payload
    }
};

function clearInputErrors(){
    return{
  type:CLEAR_ERRORS
    }
}

export {
    addInputError,
    clearInputErrors
}