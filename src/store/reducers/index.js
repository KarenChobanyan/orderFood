import { combineReducers } from 'redux'
import OrderReducer from './OrderReducer'
import MenuReducer from './MenuReducer'
import HistoryReducer from './HistoryReducer'

const CombinedReducers = combineReducers({
    cart:OrderReducer,
    menu:MenuReducer,
    history:HistoryReducer
})

export default CombinedReducers