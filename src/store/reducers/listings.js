import * as types from "../actions/listings/listingsActions"

const initialState = {
  listings: [
    { title: "yes" },
    { title: "yes" },
    { title: "yes" },
    { title: "no" },
    { title: "no" },
    { title: "no" },
    { title: "no" },
  ],
  searchCrit: "yes",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.changeSearchCrit:
      return { ...state, searchCrit: action.payload }
    default:
      return state
  }
}
