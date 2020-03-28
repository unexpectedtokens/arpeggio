import React from "react"
import styled from "styled-components"

const PickButton = styled.button``

const PickContainer = styled.div`
  display: flex;
`

export default props => {
  const { clicked } = props
  return (
    <PickContainer>
      <PickButton onClick={() => clicked("indiv")}>A band to join</PickButton>
      <PickButton onClick={() => clicked("band")}>
        Someone to join my band
      </PickButton>
    </PickContainer>
  )
}
