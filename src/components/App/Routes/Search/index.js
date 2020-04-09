import React, { useState, useEffect } from "react"
import { Stagger, RouteContainer } from "../../../UI/appspecific/Containers"
import { connect } from "react-redux"
import CritPicker from "../../../UI/appspecific/Search/CritPicker"
import Logo from "../../../UI/Logo"
import Button from "../../../UI/appspecific/Button"
import cities from "../../../../LocalData/cities.json"
//CREATORS
import {
  changeSearchCritCreator,
  changeCityCreator,
  changeDistanceCreator,
} from "../../../../store/actions/listings/listingsActionCreators"
import CityPicker from "../../../UI/appspecific/Search/CityPicker"
import Container from "../../../UI/appspecific/Search/Container"
import { navigate } from "gatsby"

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
  const [crit, setCrit] = useState("indiv")
  const [city, setCity] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [instrument, setInstrument] = useState("guitar")
  const [error, setError] = useState("")
  const [suggestions, setSuggestions] = useState([])
  // const [distance, setDistance] = useState(25)
  const { changeSearchCrit, changeCity } = props

  const critOptions = [
    { val: "band", text: "A band to join" },
    { val: "indiv", text: "Someone to join my band" },
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
    if (city !== "") {
      setSuggestions(cities.filter(cityFromArr => cityFromArr.includes(city)))
    } else {
      setSuggestions([])
    }
  }, [city])
  const handleCityClick = city => {
    setCity(city)
  }
  const handleSubmit = () => {
    if (city) {
      changeSearchCrit(crit)
      changeCity(city.toLowerCase())
      navigate(`/app/search/${crit}`)
    } else {
      setError("Please fill in a city or town")
    }
  }
  return (
    <RouteContainer>
      <Stagger state={props.state}>
        <Container>
          <Logo />
          <Stagger state={props.state} delay="0.5s">
            <h2>I'm looking for...</h2>
            <CritPicker
              clicked={handleClick}
              crit={crit}
              options={critOptions}
            />
          </Stagger>
          <Stagger state={props.state} delay="0.8s">
            <CityPicker
              value={city}
              changed={setCity}
              clicked={handleCityClick}
              suggestions={suggestions.splice(0, 11)}
            />
          </Stagger>
          <Stagger>
            {crit === "indiv" ? (
              <h2>That plays...</h2>
            ) : (
              <h2>That is looking for someone that plays...</h2>
            )}
            <CritPicker
              clicked={setInstrument}
              crit={instrument}
              options={instrumentOptions}
            />
          </Stagger>
          <Stagger state={props.state} delay="1s">
            {error && <p>{error}</p>}

            <Button text="Search" clicked={handleSubmit} />
          </Stagger>
        </Container>
      </Stagger>
    </RouteContainer>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
