import * as types from "../actions/auth/authActions"

const initialState = {
  user: {},
  authenticated: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.authenticate:
      return { ...state, authenticated: true }
    case types.signout:
      return { ...state, authenticated: false }
    default:
      return state
  }
}
