import { Router, navigate, Location, Link, globalHistory } from "@reach/router"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { TransitionGroup, Transition } from "react-transition-group"

//ROUTE IMPORTS
import Home from "../components/App/Routes/Home"
import Search from "../components/App/Routes/Search"
import Profile from "../components/App/Routes/Profile"
import Messages from "../components/App/Routes/Messages"
import SearchIndex from "../components/App/Routes/Search/"
import SearchIndivs from "../components/App/Routes/Search/SearchIndivs"
import SearchBand from "../components/App/Routes/Search/SearchBands"

////
import { MdSearch, MdHome, MdMessage, MdPerson } from "react-icons/md"
import { FaHeart, FaGithub } from "react-icons/fa"
import {
  Container,
  Content,
  Main,
} from "../components/UI/appspecific/Containers"
import {
  IconBar,
  SideBar,
  SideBarLink,
  FooterInfo,
} from "../components/UI/appspecific/sidebar"
import Logo from "../components/UI/Logo"

//ACTIONCREATORS
import { signoutCreator } from "../store/actions/auth/authActionCreators"

const NotFound = () => {
  useEffect(() => {
    navigate("/app", { replace: true })
  }, [])

  return <p>404</p>
}

const MapStateToProps = state => {
  return {
    user: state.auth.user,
    auth: state.auth.authenticated,
  }
}
const MapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(signoutCreator()),
  }
}
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(props => {
  const { auth, onSignOut } = props
  const [path, setPath] = useState("/app/")
  const Routes = [
    { to: "/app/", text: "Home" },
    { to: "/app/search", text: "Search" },
    { to: "/app/messages", text: "Messages" },
    { to: "/app/profile", text: "Profile" },
  ]
  //navigates back to login screen if !auth
  useEffect(() => {
    if (!auth) {
      navigate("/auth/")
    }
  }, [auth])
  //update path on navigate
  useEffect(() => {
    return globalHistory.listen(event => {
      if (event.action === "PUSH") setPath(event.location.pathname)
    })
  }, [])

  return (
    <Container>
      <Content>
        <SideBar>
          <Logo
            clicked={() => {
              navigate("/app/")
            }}
          />

          <ul>
            {Routes.map(link => {
              return (
                <li key={link.to}>
                  <SideBarLink
                    active={link.to === path ? "true" : null}
                    to={link.to}
                    onClick={() => setPath(link.to)}
                  >
                    {link.to === "/app/" ? (
                      <MdHome />
                    ) : link.to === "/app/search" ? (
                      <MdSearch />
                    ) : link.to === "/app/messages" ? (
                      <MdMessage />
                    ) : (
                      <MdPerson />
                    )}
                    <span> {link.text}</span>
                  </SideBarLink>
                </li>
              )
            })}
          </ul>
          {auth && <button onClick={onSignOut}>Sign out</button>}

          <IconBar>
            <a href="https://github.com/unexpectedtokens/">
              <FaGithub />
            </a>
          </IconBar>
          <FooterInfo>
            This project is open source.{" "}
            <a href="https://github.com/unexpectedtokens/arpeggio">
              Click here to view source
            </a>
            .
          </FooterInfo>
          <FooterInfo>
            Built with <FaHeart /> in the Netherlands with{" "}
            <a href="https://gatsbyjs.org">Gatsby</a> by{" "}
            <a href="https://dtronics.dev">Daniel de Jong</a>
          </FooterInfo>
          <FooterInfo>
            <Link to="/">Back to Homepage</Link>
          </FooterInfo>
        </SideBar>
        <Main>
          <Location>
            {({ location }) => (
              <TransitionGroup>
                <Transition appear={true} key={location.key} timeout={1000}>
                  {state => {
                    return (
                      <Router basepath="/app" location={location}>
                        <NotFound default />
                        <Home path="/" state={state} />
                        <Search path="search">
                          <SearchBand path="band" state={state} />
                          <SearchIndex path="/" state={state} />
                          <SearchIndivs path="/indiv" state={state} />
                        </Search>
                        <Profile path="/profile" state={state} />
                        <Messages path="/messages" state={state} />
                      </Router>
                    )
                  }}
                </Transition>
              </TransitionGroup>
            )}
          </Location>
        </Main>
      </Content>
    </Container>
  )
})
