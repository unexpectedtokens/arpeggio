import { createStore, combineReducers } from "redux"
import reducer from "./reducer"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({ general: reducer, form: formReducer })

export default createStore(rootReducer)
