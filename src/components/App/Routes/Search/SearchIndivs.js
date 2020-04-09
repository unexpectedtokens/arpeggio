import React from "react"
import { connect } from "react-redux"
import { useEffect } from "react"
import firebaseInstance from "../../../../firebase/firebase"
import { navigate } from "gatsby"
import Spinner from "../../../UI/appspecific/Spinner"

const SearchIndivs = props => {
  useEffect(() => {
    if (props.city) {
      const firebase = firebaseInstance()
      firebase
        .firestore()
        .collection("profile")
        .get()
        .then(querySnapShot =>
          querySnapShot.forEach(snap => console.log(snap.data()))
        )
    } else {
      navigate("/app/search")
    }
  }, [props.city])
  return (
    <div>
      {props.city} {props.searchCrit}
      <Spinner />
    </div>
  )
}

const mapState = state => {
  return {
    city: state.listing.city,
    searchCrit: state.listing.searchCrit,
  }
}
export default connect(mapState)(SearchIndivs)
