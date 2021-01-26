import { signWithEmail } from "../firebase"
import { setUserUid } from "./userReducer"

const SET_ERROR_MSG = 'SET_ERROR_MSG'

let initialState = {
    errorMsg: ''
}

export let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MSG:
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        default:
            return state
    }
}

let setErrorMsg = errorMsg => {
    return {
        type: SET_ERROR_MSG,
        errorMsg
    }
}

export let signWithEmailThunk = (email, password) => dispatch => {
    debugger
    let response = signWithEmail(email, password)
    debugger
    if (response.user.uid) {
        debugger
        // dispatch(setUserUid(response.user.uid))
    } else {
        debugger
        dispatch(setErrorMsg(response.message))
        setTimeout(() => {
            dispatch(setErrorMsg(''))
        }, 3000)
    }
}