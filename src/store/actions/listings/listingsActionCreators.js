import * as types from "./listingsActions"

export const changeSearchCritCreator = crit => {
  return { type: types.changeSearchCrit, payload: crit }
}
export const changeDistanceCreator = distance => {
  return { type: types.changeDistance, payload: distance }
}

export const changeCityCreator = city => {
  return { type: types.changeCity, payload: city }
}
export const setInstrumentCreator = instrument => {
  return { type: types.setInstrument, payload: instrument }
}
