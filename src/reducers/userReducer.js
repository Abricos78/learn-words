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
    return {
        type: SET_USER_UID,
        uid
    }
}