import { Router, navigate, Location, Link } from "@reach/router"
import React, { useState, useEffect } from "react"
import { Provider, connect } from "react-redux"
import { TransitionGroup, Transition } from "react-transition-group"
import Home from "../components/App/Routes/Home"
import Search from "../components/App/Routes/Search"
import Profile from "../components/App/Routes/Profile"
import Messages from "../components/App/Routes/Messages"
import Auth from "../components/App/Routes/auth/Auth"
import { MdSearch, MdHome, MdMessage, MdPerson } from "react-icons/md"
import { FaHeart, FaGithub } from "react-icons/fa"
import store from "../store/index"
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
import { signoutCreator } from "../store/actionCreators"

const NotFound = () => {
  navigate("/app/")
  return null
}

const MapStateToProps = state => {
  return {
    user: state.general.user,
    auth: state.general.auth,
  }
}
const MapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(signoutCreator()),
  }
}
const App = connect(
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
  useEffect(() => {
    if (!auth) {
      navigate("/app/")
    }
  }, [auth])
  return (
    <Container>
      <Transition
        in={!auth && props.location.pathname !== "/"}
        timeout={500}
        unmountOnExit={true}
      >
        {state => <Auth state={state} />}
      </Transition>
      <Transition
        in={auth && props.location.pathname !== "/"}
        unmountOnExit={true}
        timeout={300}
      >
        {state => (
          <Content state={state}>
            <SideBar>
              <Logo
                clicked={() => {
                  setPath("/app/")
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
                            <Home path="/" state={state} />
                            <Search path="/search" state={state} />
                            <Profile path="/profile" state={state} />
                            <Messages path="/messages" state={state} />
                            <NotFound default />
                          </Router>
                        )
                      }}
                    </Transition>
                  </TransitionGroup>
                )}
              </Location>
            </Main>
          </Content>
        )}
      </Transition>
    </Container>
  )
})

export default props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
}
