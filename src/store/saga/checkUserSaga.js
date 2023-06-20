 import {take, takeEvery} from "redux-saga/effects"
import { CHECK_USER } from "../types/UserTypes"
import setUserSaga from "./setUserSaga";
 
 export default function* checkUserSaga(){
     yield takeEvery(CHECK_USER,setUserSaga)
 }