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
  searchCrit: "band",
  city: "",
  instrumentSelected: "guitar",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.changeSearchCrit:
      return { ...state, searchCrit: action.payload }
    case types.changeCity:
      return { ...state, city: action.payload }
    case types.setInstrument:
      return { ...state, instrumentSelected: action.payload }
    default:
      return state
  }
}
