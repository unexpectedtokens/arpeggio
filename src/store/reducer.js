import * as types from "./actions"

const initialState = {
  user: {},
  location: {},
  auth: false,
}

export default (state = initialState, action) => {
  console.log("[REDUCING]: ", action.type)
  switch (action.type) {
    case types.authenticate:
      return { ...state, auth: true }
    case types.signout:
      return { ...state, auth: false }
    default:
      return state
  }
}
