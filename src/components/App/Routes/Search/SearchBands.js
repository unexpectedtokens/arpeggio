import React from "react"
import { connect } from "react-redux"
const SearchBands = props => {
  return (
    <div>
      {props.city} {props.searchCrit}
    </div>
  )
}

const mapState = state => {
  return {
    city: state.listing.city,
    searchCrit: state.listing.searchCrit,
  }
}
export default connect(mapState)(SearchBands)
