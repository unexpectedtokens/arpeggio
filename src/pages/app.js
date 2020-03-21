import { Router } from "@reach/router"
import { Link } from "gatsby"
import React, { useState } from "react"
import { Provider, connect } from "react-redux"
import store from "../store/index"
import {
  Container,
  Content,
  Main,
} from "../components/UI/appspecific/Containers"
import { SideBar, SideBarLink } from "../components/UI/appspecific/sidebar"
import Logo from "../components/UI/Logo"
const Home = props => {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/app/not">not</Link>
    </div>
  )
}
const NotHome = props => {
  return (
    <div>
      <h1>NOTHOME</h1>
      <Link to="/app">home</Link>
    </div>
  )
}
const MapStateToProps = state => {
  return {
    user: state.user,
  }
}
const App = connect(MapStateToProps)(props => {
  const [path, setPath] = useState("/app/")
  const Routes = [
    { to: "/app/", text: "Home" },
    { to: "/app/search", text: "Search" },
    { to: "/app/messages", text: "Messages" },
    { to: "/app/profile", text: "Profile" },
  ]

  return (
    <Container>
      <Content>
        <SideBar>
          <Logo />
          <ul>
            {Routes.map(link => {
              return (
                <li key={link.to}>
                  <SideBarLink
                    active={link.to === path ? "true" : null}
                    to={link.to}
                    onClick={() => setPath(link.to)}
                  >
                    <span> {link.text}</span>
                  </SideBarLink>
                </li>
              )
            })}
          </ul>
        </SideBar>
        <Main>
          <Router basepath="/app">
            <NotHome path="/not" />
            <Home path="/" />
          </Router>
        </Main>
      </Content>
    </Container>
  )
})

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
