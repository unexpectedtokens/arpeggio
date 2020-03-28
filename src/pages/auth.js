import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import Register from "../components/App/Routes/auth/Register"
import Login from "../components/App/Routes/auth/Login"
import { connect } from "react-redux"
import { authCreator } from "../store/actions/auth/authActionCreators"
import Logo from "../components/UI/Logo"
import Background from "../components/UI/Background"
import { navigate, Link } from "gatsby"
import { FaHeart, FaGithub } from "react-icons/fa"
import { Fader, Footer, LogoGrid } from "../components/Landing/index"

///STYLING
const CSS = css`
  transform: none;
  opacity: 1;
`

const FormContainer = styled.div`
  z-index: 100;
  transition: opacity 0.3s, transform 0.3s;
  max-width: 71rem;
  min-height: 100vh;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  background: rgba(35, 38, 43, 0.95);
  padding: 6rem;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  h2 {
    font-size: 3rem;
    padding: 5rem 0 5rem 0;
    text-transform: capitalize;
  }
  ${CSS}
  form {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-direction: column;
    width: 100%;
    button.changeMode {
      background: none;
      border: none;
      outline: none;
      color: #fff;
      font-size: 1.8rem;
      margin-left: 2rem;
      cursor: pointer;
      border-left: 4px solid var(--ColorPrimary);
      padding: 1rem 0 1rem 1rem;
      span {
        border-bottom: 1px solid #fff;
      }
    }
  }
  h1 {
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 800px) {
    height: 100%;
  }
`
/////

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: () => dispatch(authCreator()),
  }
}
const mapStateToProps = state => {
  return { auth: state.auth.authenticated }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  const [mode, setMode] = useState("login")
  useEffect(() => {
    if (props.auth) {
      navigate("/app/")
    }
  }, [props.auth])
  return (
    <Background>
      <FormContainer key={mode}>
        <Fader>
          <Link to="/">
            <Logo />
          </Link>
        </Fader>
        <Fader delay="0.7s">
          <h2>Start connecting with other musicians</h2>
        </Fader>
        <Fader delay="0.9s" style={{ paddingBottom: "7rem" }}>
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
        </Fader>
        <Fader delay="1.2s">
          <LogoGrid>
            {/* <a href="/">
                  <FaTwitter size="3rem" />
                </a>
                <a href="/">
                  <FaFacebookF size="3rem" />
                </a> */}
            <a href="https://github.com/unexpectedtokens/">
              <FaGithub size="3rem" />
            </a>
          </LogoGrid>
        </Fader>
        <Fader delay="1.5s">
          <Footer>
            <p>
              This project is open source.{" "}
              <a href="https://github.com/unexpectedtokens/arpeggio">
                Click here to view the source.
              </a>
            </p>
            <p>
              Built with <FaHeart size="1rem" /> in the Netherlands with{" "}
              <a href="https://gatsbyjs.org">Gatsby</a> by{" "}
              <a href="https://dtronics.dev">Daniel de Jong</a>.
            </p>
          </Footer>
        </Fader>
      </FormContainer>
    </Background>
  )
})
