import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const ButtonComp = styled(Link)`
  background: linear-gradient(
    to right,
    var(--ColorPrimary) 0%,
    var(--ColorPrimaryFaded) 65%
  );
  background-size: 150%;
  color: #fff;
  text-decoration: none;
  padding: 2rem 4rem;
  font-size: 2.5rem;
  font-weight: 300;
  box-shadow: 0 0 5rem #932822;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  margin: 8rem 0;
  display: inline-block;
  :hover {
    background-position: 35%;
    transform: scale(1.03);
    box-shadow: 0 0 10rem #932822;
  }
`

const Button = props => {
  return <ButtonComp to={props.to}>{props.text}</ButtonComp>
}
export const ButtonBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: center;
  margin: 2rem 0;
  z-index: 5;
`
export default Button
