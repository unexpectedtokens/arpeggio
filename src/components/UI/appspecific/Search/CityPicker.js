import React from "react"
import styled from "styled-components"
import { FaMapMarkerAlt } from "react-icons/fa"

const CurBut = styled.button`
  border: none;
  font-size: 1.8rem;
  color: var(--ColorDarkLight);
  padding: 1.5rem;
  background: #fff;
  text-indent: 2rem;
  text-align: left;
  overflow: hidden;
  display: block;
`

const CityPickerCont = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  flex-basis: 20rem;
  .suggestionContainer {
    position: absolute;
    top: 100%;
    min-width: 100%;
    padding: 1rem;
    background: var(--ColorDarkLight);
    p {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      background: var(--ColorDark);
      cursor: pointer;
      :hover {
        background: var(--ColorDarkLight);
      }
    }
    .cross {
      cursor: pointer;
    }
    button {
      background: none;
      border: none;
      color: var(--ColorPrimaryFaded);
      padding: 0.5rem;
      transition: color 0.3s;
      cursor: pointer;
      :hover {
        color: #fff;
      }
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translate(0, -50%);
    font-size: 2rem;
    fill: var(--ColorDarkLight);
  }
  input {
    border: 1px solid var(--ColorDarkLight);
    font-size: 1.8rem;
    color: var(--ColorDarkLight);
    padding: 1.5rem;
    background: #fff;
    border-radius: 5px;
    ::placeholder {
      opacity: 0.3;
      color: var(--ColorDarkLight);
    }
  }
`

export default props => {
  const { showSuggestions, setShowSuggestions } = props
  const { value, suggestions, suggestion, setSuggestion, clicked } = props
  return (
    <CityPickerCont>
      <FaMapMarkerAlt />
      <CurBut
        type="text"
        placeholder="Where..."
        onClick={() => setShowSuggestions(true)}
      >
        {value ? value.charAt(0).toUpperCase() + value.slice(1) : "Where..."}
      </CurBut>
      {showSuggestions && (
        <div className="suggestionContainer">
          <input
            value={suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
            onChange={e => setSuggestion(e.target.value)}
          />
          {suggestions.map(city => (
            <button key={city} onClick={() => clicked(city)}>
              <span>{city.charAt(0).toUpperCase() + city.slice(1)}</span>
              <span>&rarr;</span>
            </button>
          ))}
          {suggestions.length === 0 ? (
            <p>
              <span>No suggestions found</span>
              <span className="cross" onClick={() => setShowSuggestions(false)}>
                &#10005;
              </span>
            </p>
          ) : null}
        </div>
      )}
    </CityPickerCont>
  )
}
