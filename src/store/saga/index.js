import checkUserSaga from "./checkUserSaga";

export default function* rootSaga(){
    yield checkUserSaga()
}