import React from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
import Welcome from "../../UI/appspecific/Home/Welcome"
import CTAs from "../../UI/appspecific/Home/CTAs"
import Paper from "../../UI/appspecific/Paper"
const Messages = props => {
  return (
    <RouteContainer>
      <Stagger delay=".1s" state={props.state}>
        <Welcome username={props.profile.name} />
      </Stagger>
      <Stagger delay=".3s" state={props.state}>
        <Paper>
          <CTAs userid={props.profile.userid} />
        </Paper>
      </Stagger>
    </RouteContainer>
  )
}

export default Messages
