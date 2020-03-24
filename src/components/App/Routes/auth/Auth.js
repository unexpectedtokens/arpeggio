import React, { useState } from "react"
import styled, { css } from "styled-components"
import Register from "./Register"
import Login from "./Login"
import { connect } from "react-redux"
import { authCreator } from "../../../../store/actionCreators"
import Logo from "../../../UI/Logo"

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(authCreator()),
  }
}
const CSS = css`
  transform: translateY(2rem) translateX(-50%);
  opacity: 0;
`

const FormContainer = styled.div`
  z-index: 100;
  transition: opacity 0.3s, transform 0.3s;
  max-width: 71rem;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateY(0) translateX(-50%);
  margin: auto;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  background: var(--ColorDark);
  padding: 2rem;
  ${props =>
    props.state === "entering" || props.state === "entered" ? null : CSS}
  form {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-direction: column;
    background: var(--ColorDarkLight);
    padding: 4rem;
    width: 100%;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    button.changeMode {
      background: none;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1.8rem;
      margin-left: 2rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h1 {
    margin-bottom: 4rem;
    padding-left: 4rem;
  }
  @media screen and (max-width: 800px) {
    height: 100%;
  }
`

export default connect(
  "",
  mapDispatchToProps
)(props => {
  const [mode, setMode] = useState("login")
  return (
    <FormContainer state={props.state} key={mode}>
      <Logo />
      {mode === "login" ? (
        <Login
          setMode={() => setMode("register")}
          authenticate={props.onSignIn}
        />
      ) : (
        <Register
          authenticate={props.onSignIn}
          setMode={() => setMode("login")}
        />
      )}
    </FormContainer>
  )
})
