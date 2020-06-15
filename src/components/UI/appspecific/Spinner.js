import Spinner from "../../../images/spinner.svg"
import styled from "styled-components"
import React from "react"
const Img = styled.img`
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default () => {
  return <Img alt="spinner" src={Spinner} />
}
