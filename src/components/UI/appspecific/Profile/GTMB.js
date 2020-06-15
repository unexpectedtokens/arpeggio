import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)`
  padding: 1rem 2rem;
  background: #fff;
  border-radius: 5px;
  border: none;
  display: block;
  text-align: center;
  color: var(--ColorDarkLight);
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  transition: transform 0.3s;
  :hover {
    transform: translateY(-3px);
  }
  svg {
    margin-right: 5px;
  }
`
