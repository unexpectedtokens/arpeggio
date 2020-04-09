import React from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
import { connect } from "react-redux"
const Profile = props => {
  return (
    <RouteContainer>
      <Stagger delay=".1s" state={props.state}>
        {JSON.stringify(props.profile)}
      </Stagger>
      <Stagger delay=".3s" state={props.state}>
        Home
      </Stagger>
      <Stagger delay=".5s" state={props.state}>
        Home
      </Stagger>
      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>
    </RouteContainer>
  )
}

const mapState = state => {
  return { profile: state.auth.profile }
}

export default connect(mapState)(Profile)
