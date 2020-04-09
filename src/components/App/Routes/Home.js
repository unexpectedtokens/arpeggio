import React from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
import Welcome from "../../UI/appspecific/Home/Welcome"
import CTAs from "../../UI/appspecific/Home/CTAs"
const Messages = props => {
  return (
    <RouteContainer>
      <Stagger delay=".1s" state={props.state}>
        <Welcome username={props.user.displayName} />
      </Stagger>
      <Stagger delay=".3s" state={props.state}>
        <CTAs />
      </Stagger>
    </RouteContainer>
  )
}

export default Messages
