import { combineReducers, createStore } from "redux";
import { userReducer } from "../reducers/userReducer";
import { wordsReducer } from "../reducers/wordsReducer";

let reducers = combineReducers({
    user: userReducer,
    words: wordsReducer
})

export let store = createStore(reducers)