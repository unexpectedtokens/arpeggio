import * as types from "./listingsActions"

export const changeSearchCritCreator = crit => {
  return { type: types.changeSearchCrit, payload: crit }
}
