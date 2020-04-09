import styled from "styled-components"
import React from "react"
import Logo from "../../images/logolanding.svg"

const LogoContainer = styled.div`
  margin-bottom: 5rem;
  img {
    width: 15rem;
  }
`

export default props => {
  return (
    <LogoContainer onClick={props.clicked}>
      <figure>
        <img alt="logo" src={Logo} />
      </figure>
    </LogoContainer>
  )
}
