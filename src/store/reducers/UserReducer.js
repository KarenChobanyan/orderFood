import { ADDD_USER } from "../types/UserTypes";
const INIT_STATE = null
export default (state = INIT_STATE,action)=>{
    const {type,payload} = action
    switch (type) {
        case ADDD_USER:
            const tmp = payload
            return tmp
    
        default:
            return state;
    }

}