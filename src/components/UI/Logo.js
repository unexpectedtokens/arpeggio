import styled from "styled-components"
import React from "react"
const Logo = styled.h1`
  display: flex;
  font-size: 1.8rem;
  margin-top: 2rem;
  span {
    color: var(--ColorPrimary);
  }
`

export default () => {
  return (
    <Logo>
      Arpegg.<span>io</span>
    </Logo>
  )
}
