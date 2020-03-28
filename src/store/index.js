import { createStore, combineReducers } from "redux"
import authReducer from "./reducers/auth"
import listingReducer from "./reducers/listings"

const rootReducer = combineReducers({
  auth: authReducer,
  listing: listingReducer,
})

export const store = createStore(rootReducer)
