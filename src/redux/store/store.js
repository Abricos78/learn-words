import thunkMiddleware from "redux-thunk";
import { loginReducer } from "../loginReducer";
import { userReducer } from "../userReducer";
import { userWordsReducer } from "../userWordsReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    user: userReducer,
    userWords: userWordsReducer,
    login: loginReducer
})


export let store = createStore(reducers, applyMiddleware(thunkMiddleware))