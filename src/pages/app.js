import { Router } from "@reach/router"
import { Link } from "gatsby"
import React from "react"
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

export default props => {
  return (
    <Router basepath="/app">
      <NotHome path="/not" />

      <Home path="/" />
    </Router>
  )
}
