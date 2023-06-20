import { createStore } from "redux";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import CombinedReducers from "./reducers";
import rootSaga from "./saga";

const sagaMiddle = createSagaMiddleware()

const store = createStore(CombinedReducers,applyMiddleware(sagaMiddle))

sagaMiddle.run(rootSaga)

export default store