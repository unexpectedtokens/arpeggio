import React from "react"
import styled, { css } from "styled-components"

const activeButtoncss = css`
  background: var(--ColorPrimaryFaded);
`

const PickButton = styled.button`
  /* flex-basis: 30rem; */
  /* border: 1px solid var(--ColorPrimaryFaded); */
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 1rem;
  transition: background 0.3s;
  ${props => (props.active ? activeButtoncss : null)};
  :not(:last-of-type) {
    margin-right: 1.5rem;
  }
`

const PickContainer = styled.div`
  display: flex;
  margin: 2rem 0;
`

export default props => {
  const { clicked, crit, options } = props
  return (
    <PickContainer>
      {options.map(option => {
        return (
          <PickButton
            onClick={() => clicked(option.val)}
            active={crit === option.val}
            key={option.val}
          >
            {option.text}
          </PickButton>
        )
      })}
    </PickContainer>
  )
}
