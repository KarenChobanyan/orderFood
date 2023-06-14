import { combineReducers, createStore } from "redux";
import CombinedReducers from "./reducers";

 const store = createStore(CombinedReducers)

 export default store