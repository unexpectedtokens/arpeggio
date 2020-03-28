import React from "react"
import { Stagger, RouteContainer } from "../../../UI/appspecific/Containers"
import { connect } from "react-redux"
import CritPicker from "../../../UI/appspecific/Search/Picker"

//CREATORS
import { changeSearchCritCreator } from "../../../../store/actions/listings/listingsActionCreators"

const mapDispatchToProps = dispatch => {
  return {
    changeSearchCrit: crit => dispatch(changeSearchCritCreator(crit)),
  }
}
const mapStateToProps = state => {
  return {
    searchCrit: state.listing.searchCrit,
  }
}
const index = props => {
  const { changeSearchCrit } = props
  const handleClick = crit => {
    changeSearchCrit(crit)
  }
  return (
    <RouteContainer>
      <Stagger state={props.state} delay=".3s">
        <h2>I'm looking for...</h2>
        <CritPicker clicked={handleClick} />
      </Stagger>
    </RouteContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
