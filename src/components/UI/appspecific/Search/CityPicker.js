import React, { useState } from "react"
import styled from "styled-components"

const CityPickerCont = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;

  .suggestionContainer {
    position: absolute;
    top: 100%;
    width: 100%;
    p {
      padding: 1rem;
      background: var(--ColorDark);
      :hover {
        background: var(--ColorDarkLight);
      }
    }
  }
  input {
    margin: 2rem 0 0;
    border: none;
    font-size: 1.8rem;
    color: #fffcc8;
    padding: 1.5rem;
    background: linear-gradient(
      to left,
      var(--ColorDark),
      var(--ColorDarkLight)
    );
    ::placeholder {
      opacity: 0.3;
      color: #fffcc8;
    }
  }
`

export default props => {
  const [focus, setFocus] = useState(false)
  const { value, changed, suggestions } = props
  return (
    <CityPickerCont>
      <h2>In...</h2>
      <input
        type="text"
        value={value}
        onChange={e => changed(e.target.value)}
        placeholder="Type in the city you live in or close to..."
        onFocus={() => setFocus(true)}
      />
      {focus && (
        <div className="suggestionContainer">
          {suggestions.map(city => (
            <p key={city} onClick={() => changed(city)}>
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </p>
          ))}
          {suggestions.length === 0 ? <p>No suggestions found</p> : null}
        </div>
      )}
    </CityPickerCont>
  )
}
