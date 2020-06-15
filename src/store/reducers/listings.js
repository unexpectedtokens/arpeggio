import * as types from "../actions/listings/listingsActions"

const initialState = {
  listings: [],
  searchCrit: { crit: "band", instrument: "guitar" },
  city: "",
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
