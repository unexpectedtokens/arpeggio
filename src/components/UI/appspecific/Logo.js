import styled from "styled-components"
import React from "react"
import Logo from "../../../images/logoapp.svg"

const LogoContainer = styled.figure`
  margin: 1rem;
  cursor: pointer;
  img {
    width: 10rem;
  }
`

export default props => {
  return (
    <LogoContainer onClick={props.clicked}>
      <img src={Logo} alt="logo" />
    </LogoContainer>
  )
}
