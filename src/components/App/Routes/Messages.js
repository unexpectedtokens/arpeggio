import React from "react"
import { Stagger, RouteContainer } from "../../UI/appspecific/Containers"
const Messages = props => {
  return (
    <RouteContainer>
      <Stagger delay=".1s" state={props.state}>
        Home
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
      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>
      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>
      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>
      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>

      <Stagger delay=".7s" state={props.state}>
        Home
      </Stagger>
    </RouteContainer>
  )
}

export default Messages
