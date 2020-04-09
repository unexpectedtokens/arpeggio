import { Router, navigate, Location, Link, globalHistory } from "@reach/router"
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { TransitionGroup, Transition } from "react-transition-group"
import firebase from "../firebase/firebase"
//ROUTE IMPORTS
import Home from "../components/App/Routes/Home"
import Search from "../components/App/Routes/Search"
import Profile from "../components/App/Routes/Profile"
import Messages from "../components/App/Routes/Messages"
import SearchIndex from "../components/App/Routes/Search/"
import SearchIndivs from "../components/App/Routes/Search/SearchIndivs"
import SearchBand from "../components/App/Routes/Search/SearchBands"

///////ICON/asset IMPORTS

import { MdSearch, MdHome, MdMessage, MdPerson } from "react-icons/md"
import { FaHeart, FaGithub } from "react-icons/fa"

//UI COMPS IMPORTs
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
import Logo from "../components/UI/appspecific/Logo"

//ACTIONCREATORS
import * as dispatchCreators from "../store/actions/auth/authActionCreators"
import { useCallback } from "react"

const MapStateToProps = state => {
  return {
    user: state.auth.user,
    auth: state.auth.authenticated,
  }
}
const MapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(dispatchCreators.signoutCreator()),
    onSignIn: user => dispatch(dispatchCreators.authCreator(user)),
    onSetProfile: profile =>
      dispatch(dispatchCreators.setProfileCreator(profile)),
  }
}
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(props => {
  const { auth, onSignOut, onSignIn, user, onSetProfile } = props
  const [path, setPath] = useState("/app/")
  const Routes = [
    { to: "/app/", text: "Home" },
    { to: "/app/search", text: "Search" },
    { to: "/app/messages", text: "Messages" },
    { to: "/app/profile", text: "Profile" },
  ]
  //navigates back to login screen if !auth

  const firebaseInstance = firebase()

  //get the user profile and store it in redux
  const getUserProfile = useCallback(
    userid => {
      firebaseInstance
        .firestore()
        .collection("profile")
        .where("userid", "==", userid)
        .get()
        .then(querySnapshot =>
          querySnapshot.forEach(doc => {
            onSetProfile(doc.data())
          })
        )
    },
    [firebaseInstance, onSetProfile]
  )

  //update path on navigate
  useEffect(() => {
    return firebaseInstance.auth().onAuthStateChanged(user => {
      if (user) {
        onSignIn(user)
        getUserProfile(user.uid)
      } else {
        onSignOut()
        navigate("/auth")
      }
    })
  }, [firebaseInstance, onSignIn, onSignOut, getUserProfile])
  //set pathname to track which route is active for the navbar
  useEffect(() => {
    setPath(props.location.pathname.split("/")[2])

    return globalHistory.listen(event => {
      if (event.action === "PUSH")
        setPath(event.location.pathname.split("/")[2])
    })
  }, [props.location.pathname])
  const signOut = () => {
    firebaseInstance.auth().signOut()
  }
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
              const linkPath = link.to.split("/")[2]
              return (
                <li key={link.to}>
                  <SideBarLink
                    active={linkPath === path ? "true" : null}
                    to={link.to}
                    onClick={() => setPath(linkPath)}
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
          {auth && <button onClick={signOut}>Sign out</button>}

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
                <Transition key={location} timeout={1000} unmountOnExit={true}>
                  {state => {
                    return (
                      <Router basepath="/app">
                        <Home path="/" default user={user} state={state} />
                        <Search path="search">
                          <SearchBand path="band" state={state} />
                          <SearchIndex path="/" state={state} />
                          <SearchIndivs path="indiv" state={state} />
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
