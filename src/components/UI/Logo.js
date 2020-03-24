import styled from "styled-components"
import React from "react"
const Logo = styled.h1`
  display: flex;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  span {
    color: var(--ColorPrimary);
  }
`

export default props => {
  return (
    <Logo onClick={props.clicked}>
      Arpegg.<span>io</span>
    </Logo>
  )
}
