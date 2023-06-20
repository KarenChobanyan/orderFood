import { put } from "redux-saga/effects"
import { addInputError, clearInputErrors } from "../actions/ErrorActions"
import { addUser } from "../actions/UserActions"



function checkString(string) {
    string.trim()
    let currectString = string.search(/^[A-Za-z]+$/g)
    if (currectString == 0) {
        return string
    } else {
        throw new Error("Name and Surname must contain only letters")
    }

};

function checkPhoneNumber(phoneNumber) {
    phoneNumber.trim()
    let currectNumber = phoneNumber.search(/^\+\d{11}/g)
    if (currectNumber == 0) {
        return phoneNumber
    } else {
        throw new Error("Incorrect Phone number. Example +374XXXXXXXX")
    }
}


export default function* setUserSaga(action) {
    try {
        yield put(clearInputErrors())
        yield checkString(action.payload.name)
        yield checkString(action.payload.surName)
        yield checkPhoneNumber(action.payload.phone)
        yield put(addUser(action.payload))
    } catch (error) {
        yield put(addInputError(error.message))

    }
}