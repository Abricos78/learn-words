import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
import { userWordsReducer } from "../reducers/userWordsReducer";

let reducers = combineReducers({
    user: userReducer,
    words: userWordsReducer
})


export let store = createStore(reducers, applyMiddleware(thunk))