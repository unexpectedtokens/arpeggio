import Spinner from "../../../images/spinner.svg"
import styled from "styled-components"
import React from "react"
const Img = styled.img`
  height: 10rem;
`

export default () => {
  return <Img alt="spinner" src={Spinner} />
}
