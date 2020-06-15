import React, { useState, useEffect } from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
import { connect } from "react-redux"
import CritPicker from "../../UI/appspecific/Search/CritPicker"
import cities from "../../../LocalData/cities.json"
//CREATORS
import {
  changeSearchCritCreator,
  changeCityCreator,
  changeDistanceCreator,
} from "../../../store/actions/listings/listingsActionCreators"
import CityPicker from "../../UI/appspecific/Search/CityPicker"
import Paper from "../../UI/appspecific/Paper"
import {
  Container,
  Filter,
  FilterSubmit,
} from "../../UI/appspecific/Search/Container"
import List from "../../UI/appspecific/Search/List"

const mapDispatchToProps = dispatch => {
  return {
    changeSearchCrit: crit => dispatch(changeSearchCritCreator(crit)),
    changeCity: city => dispatch(changeCityCreator(city)),
    changeDistance: distance => dispatch(changeDistanceCreator(distance)),
  }
}
const mapStateToProps = state => {
  return {
    searchCrit: state.listing.searchCrit,
    searchCity: state.listing.city,
    searchDistance: state.listing.distance,
  }
}
const index = connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const [crit, setCrit] = useState({
    val: "band",
    text: "I'm looking for a band to join",
  })
  const [city, setCity] = useState("")
  const [instrument, setInstrument] = useState({
    val: "guitar",
    text: "guitar",
  })
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestion, setSuggestion] = useState("")
  // const [distance, setDistance] = useState(25)
  const { changeSearchCrit, changeCity } = props

  const critOptions = [
    { val: "band", text: "I'm looking to join a band" },
    { val: "indiv", text: "I'm looking for band member(s)" },
  ]

  const instrumentOptions = [
    { val: "guitar", text: "guitar" },
    { val: "drums", text: "drums" },
    { val: "bassguitar", text: "bassguitar" },
    { val: "piano", text: "piano" },
    { val: "vocals", text: "vocals" },
  ]
  const handleClick = crit => {
    setCrit(crit)
  }
  useEffect(() => {
    if (suggestion) {
      setSuggestions(
        cities.filter(cityFromArr =>
          cityFromArr.includes(suggestion.toLowerCase())
        )
      )
    } else {
      setSuggestions([])
    }
  }, [suggestion])
  const handleCityClick = city => {
    setCity(city)
    setShowSuggestions(false)
    setSuggestion("")
  }
  const handleSubmit = () => {
    changeSearchCrit({ crit: crit.val, instrument: instrument.val })
    changeCity(city.toLowerCase())
  }
  return (
    <RouteContainer>
      <Stagger state={props.state}>
        <Container>
          <Paper>
            <Filter>
              <CityPicker
                value={city}
                changed={setCity}
                clicked={handleCityClick}
                suggestion={suggestion}
                setSuggestion={setSuggestion}
                suggestions={suggestions.splice(0, 11)}
                showSuggestions={showSuggestions}
                setShowSuggestions={setShowSuggestions}
              />
              <CritPicker
                clicked={handleClick}
                crit={crit}
                options={critOptions}
              />

              <CritPicker
                clicked={setInstrument}
                crit={instrument}
                options={instrumentOptions}
              />
              <FilterSubmit onClick={handleSubmit}>Search &rarr;</FilterSubmit>
            </Filter>
          </Paper>
          <Paper>
            <List />
          </Paper>
        </Container>
      </Stagger>
    </RouteContainer>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
