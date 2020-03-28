import React from "react"
import styled from "styled-components"
import spinner from "../../../images/spinner.svg"
const ButtonComp = styled.button`
  background: var(--ColorPrimaryFaded);
  color: #fff;
  text-decoration: none;
  padding: 1rem 3rem;
  font-size: 1.8rem;
  font-weight: 300;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  margin: 2rem 0;
  display: inline-block;
  border: none;
  min-width: 20rem;
  cursor: pointer;
  overflow: hidden;
  :hover {
    transform: scale(1.03);
  }
  img {
    height: 1.8rem;
  }
`

const Button = props => {
  return (
    <ButtonComp to={props.to} onClick={props.clicked}>
      {props.loading ? <img alt="" src={spinner} /> : props.text}
    </ButtonComp>
  )
}
export const ButtonBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: center;
  margin: 6rem 0 0;
  z-index: 5;
`
export default Button
