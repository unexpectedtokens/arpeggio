import styled from "styled-components"

export default styled.div`
  background: var(--ColorDarkLight);
  margin: 2rem 2rem 5rem;
  border-radius: 5px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, transform 0.3s;
  :hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transform: scale(0.995);
  }
`
