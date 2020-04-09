import * as types from "../actions/auth/authActions"

const initialState = {
  user: {},
  profile: {},
  authenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.authenticate:
      return { ...state, authenticated: true, user: action.payload }
    case types.signout:
      return { ...state, authenticated: false, user: {} }
    case types.setProfile:
      return { ...state, profile: action.payload }
    default:
      return state
  }
}
