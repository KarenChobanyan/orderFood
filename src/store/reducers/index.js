import { combineReducers } from 'redux'
import OrderReducer from './OrderReducer'
import MenuReducer from './MenuReducer'
import HistoryReducer from './HistoryReducer'
import UserReducer from './UserReducer'
import ErrorReducer from './ErrorReducer'
import PreaparingOrder from './PreaparingOrder'

const CombinedReducers = combineReducers({
    cart:OrderReducer,
    menu:MenuReducer,
    history:HistoryReducer,
    user:UserReducer,
    error: ErrorReducer,
    preapare:PreaparingOrder,
})

export default CombinedReducers