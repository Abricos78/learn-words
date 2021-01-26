const SET_USER_WORD = 'SET_USER_WORD',
    SET_LOADING = 'SET_LOADING'

let initialState = {
    words: [],
    value: '',
    loading: false
}

export let wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_WORD:
            return {
                ...state,
                words: [...words, action.word]
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}

export let setUserWord = word => {
    return {
        type: SET_USER_WORD,
        word
    }
}

export let setLoading = loading => {
    return {
        type: SET_LOADING,
        loading
    }
}

// export let getUserWords