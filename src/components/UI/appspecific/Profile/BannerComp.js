import styled from "styled-components"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    file(name: { eq: "surf" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const WelcomeBanner = styled(BackgroundImage)`
  padding: 2rem;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  ::after,
  ::before {
    border-radius: 5px;
  }
`

export const Banner = ({ children }) => {
  const data = useStaticQuery(query)

  const stack = [
    "linear-gradient(to bottom left,rgba(255,155,55,0.7),var(--ColorPrimaryFaded))",
    data.file.childImageSharp.fluid,
  ]
  return <WelcomeBanner fluid={stack}>{children}</WelcomeBanner>
}

export const BannerContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2rem;
  border-radius: 5px !important;

  > div {
    margin-right: 2rem;
  }
  img {
    width: 15rem;
    height: 15rem;
    transition: filter 0.3s;
    border-radius: 100%;
  }
  figure {
    margin-right: 2rem;
    position: relative;
    transform: translateY(75px);
    border: 1rem solid #fff;
    border-radius: 100%;
    box-shadow: 0 0 2rem rgba(55, 55, 55, 0.5);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 2.5rem;
      cursor: pointer;
    }
    :hover {
      img {
        filter: blur(2px) brightness(70%);
      }
      svg {
        transform: translate(-50%, -5px);
        opacity: 1;
        :hover {
          transform: translate(-50%, -2px);
        }
      }
    }
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;

    font-weight: 300;
    svg {
      margin-right: 1rem;
      vertical-align: center;
      font-size: 0.8em;
    }
  }
`

export const ContentContainer = styled.div``
