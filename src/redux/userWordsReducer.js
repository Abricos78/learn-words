import { getUserWords, setUserWords } from '../firebase.js'

const SET_WORD = 'SET_USER_WORD',
    SET_LOADING = 'SET_LOADING',
    GET_WORDS = 'GET_WORDS'

let initialState = {
    words: [],
    value: '',
    loading: false
}

export let userWordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORD:
            return {
                ...state,
                // words: [...words, action.word]
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

const getWords = words => {
    return {
        type: GET_WORDS,
        words
    }
}

export let setWord = word => {
    return {
        type: SET_WORD,
        word
    }
}

export let setLoading = loading => {
    return {
        type: SET_LOADING,
        loading
    }
}

export let getUserWordsThunk = userUid => async dispatch => {
    // let words = await getUserWords(userUid)
    // dispatch(getWords(words))
}

export let setUserWordThunk = words => async dispatch => {
    // let newWord = {
    //     id: +new Date(),
    //     eng,
    //     rus
    // }
    // setUserWords()
}

// export let getUserWords