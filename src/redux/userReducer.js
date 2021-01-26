import { authStateChanged } from "../firebase"

const SET_USER_UID = 'SET_USER_UID'

let initialState = {
    uid: ''
}

export let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_UID:
            return {
                ...state,
                uid: action.uid
            }
        default:
            return state
    }
}

export let setUserUid = uid => {
    debugger
    return {
        type: SET_USER_UID,
        uid
    }
}

export let getUserUidThunk = () => (dispatch) => {
    let response = authStateChanged()
    debugger
    if (response) {
        dispatch(setUserUid(response.user.uid))
    }

}