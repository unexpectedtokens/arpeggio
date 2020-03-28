import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

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

const WelcomeBanner = styled(BackgroundImage)`
  background: var(--ColorPrimary);
  padding: 10rem 5rem;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  h1 {
    font-size: 3.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1.8rem;
  }
`
//rgba(600,65,10, 0.7)
export default props => {
  const data = useStaticQuery(query)
  const stack = [
    "linear-gradient(to top left,rgba(255,255,255,0.7),var(--ColorPrimaryFaded))",
    data.file.childImageSharp.fluid,
  ]
  return (
    <WelcomeBanner fluid={stack}>
      <h1>Welcome, {props.username}!</h1>
      <p>Let's find you the people you need.</p>
    </WelcomeBanner>
  )
}
