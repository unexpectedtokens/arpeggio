import React from "react"
import { navigate } from "gatsby"
const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/")
  }, [])
  return (
    <>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage
