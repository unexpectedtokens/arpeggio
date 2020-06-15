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
  padding: 10rem 5rem;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 40vh;
  display: flex;
  align-items: center;
`
const BannerContainer = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 400;
  }
  p {
    font-size: 1.8rem;
  }
`

export const Banner = ({ children }) => {
  const data = useStaticQuery(query)

  const stack = [
    "linear-gradient(to top right,rgba(255,155,55,0.7),var(--ColorPrimary))",
    data.file.childImageSharp.fluid,
  ]
  return <WelcomeBanner fluid={stack}>{children}</WelcomeBanner>
}

//rgba(600,65,10, 0.7)
export default props => {
  return (
    <Banner>
      <BannerContainer>
        <h1>Welcome, {props.username}!</h1>
        <p>Let's find you the people you need.</p>
      </BannerContainer>
    </Banner>
  )
}
