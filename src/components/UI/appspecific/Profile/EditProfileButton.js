import styled, { keyframes, css } from "styled-components"

const fadeIn = keyframes`
    from{
        transform: translateY(50px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }

`
const secondaryCss = css`
  background: #fff;
  color: var(--ColorDarkLight);
`

export default styled.button`
  background: #5ebb63;
  border: none;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  margin-left: auto;
  transition: transform 0.3s ease-out;
  cursor: pointer;
  animation: ${fadeIn} 1s 0.3s;
  animation-fill-mode: backwards;
  display: flex;
  align-items: center;
  :hover {
    transform: translateY(-5px);
  }
  ${props => (props.secondary ? secondaryCss : null)}
`
