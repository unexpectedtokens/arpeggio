import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
const query = graphql`
  query {
    file(name: { eq: "concert" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const Background = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
`
export default props => {
  const { file } = useStaticQuery(query)
  const stack = [
    // "linear-gradient(rgba(222,145,26,0.5),rgba(222,145,26,0.5))",
    "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))",
    file.childImageSharp.fluid,
  ]
  return <Background fluid={stack}>{props.children}</Background>
}
