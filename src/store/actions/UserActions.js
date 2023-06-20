import { ADDD_USER, CHECK_USER } from "../types/UserTypes"

const checkUser = (payload)=>{
    return {
        type:CHECK_USER,
        payload

    }
};

const addUser = (payload)=>{
    return {
        type:ADDD_USER,
        payload

    }
};

export {
    addUser,
    checkUser
}