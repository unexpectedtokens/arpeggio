import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "@reach/router"
import Bg from "gatsby-background-image"

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 3rem;
`

const query = graphql`
  query MyQuery {
    gig: file(name: { eq: "gig" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    band: file(name: { eq: "band" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    surf: file(name: { eq: "surf" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const FadeIn = keyframes`
        from{
            opacity: 0;
        }
        to{
            opacity: 1;

        }


`
const ItemComp = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  animation: ${FadeIn} 1.5s;
  animation-delay: ${props => (props.delay ? props.delay : 0)};
  animation-fill-mode: both;
  :hover {
    transform: scale(1.05);
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .Title {
    padding: 3rem;
    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 300;
      color: #eee;
    }
  }
`
const Background = styled(Bg)`
  min-height: 20rem;
`

const Item = props => {
  const {
    item: { color, fluid, to, textTitle, text },
  } = props
  const stack = [`linear-gradient(${color}, ${color})`]
  if (fluid) stack.push(fluid)
  return (
    <ItemComp delay={`0.${(props.index + 1) * 30}s`}>
      <Background fluid={stack}>
        <Link to={`/app/${to}`}>
          <div className="Title">
            <h3>{textTitle}</h3>
            <p>{text} &rarr;</p>
          </div>
        </Link>
      </Background>
    </ItemComp>
  )
}

export default () => {
  const { gig, band, surf } = useStaticQuery(query)
  const items = [
    {
      textTitle: "Find your missing band member(s)",
      text: "lorem ipsum doler set",
      to: "search",
      color: "#fd655de8",
      fluid: band.childImageSharp.fluid,
    },

    {
      textTitle: "Check your messages",
      text: "See if anyone left you a message",
      to: "messages",
      color: "#5bc35be8",
      fluid: gig.childImageSharp.fluid,
    },
    {
      textTitle: "Optimize your profile",
      text:
        "A more detailed profile will give you a better chance of finding what you're looking for.",
      to: "profile",
      color: "#5050ffe8",
      fluid: surf.childImageSharp.fluid,
    },
  ]
  return (
    <ItemGrid>
      {items.map((item, index) => (
        <Item key={item.to} item={item} index={index} />
      ))}
    </ItemGrid>
  )
}
