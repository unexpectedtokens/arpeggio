import React from "react"
import styled from "styled-components"
import { MdChevronLeft } from "react-icons/md"

const Option = styled.button`
  background: #fff;
  min-width: 100%;
  color: var(--ColorDark);
  padding: 1rem;
  border: none;
  transition: background 0.3s;
  font-size: 1.3rem;
  text-align: left;
  box-sizing: content-box;
  display: block;

  cursor: pointer;
  :hover {
    background: #efefef;
  }
`
const PickButton = styled.button`
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 0;
  height: 100%;
  transition: background 0.3s;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: underline;
  display: block;
  background: none;

  svg {
    transform: rotate(${props => (props.showOptions ? "90deg" : "270deg")});
    transition: transform 0.3s;
  }
`
const PickContainer = styled.div`
  position: relative;
  margin: 0 3rem;
`
const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export default props => {
  const { clicked, crit, options } = props
  const [showOptions, setShowOptions] = React.useState(false)
  const handleOptionClick = val => {
    setShowOptions(false)
    clicked(val)
  }
  return (
    <PickContainer>
      <PickButton
        showOptions={showOptions}
        onClick={() => setShowOptions(cur => !cur)}
      >
        {crit.text} <MdChevronLeft />
      </PickButton>
      {showOptions && (
        <OptionsContainer>
          {options
            .filter(option => option.val !== crit.val)
            .map(option => (
              <Option
                key={option.val}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </Option>
            ))}
        </OptionsContainer>
      )}
    </PickContainer>
  )
}
