import React from "react"
import {
  ItemGrid,
  Container,
  DarkArea,
  Background,
  Fader,
  Item,
} from "../components/Landing"
import Button from "../components/UI/Button"
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

const IndexPage = () => {
  const data = useStaticQuery(query)
  const stack = [
    // "linear-gradient(rgba(222,145,26,0.5),rgba(222,145,26,0.5))",
    data.file.childImageSharp.fluid,
  ]
  return (
    <Background fluid={stack}>
      <Container>
        <DarkArea>
          <div></div>
          <div className="content">
            <Fader>
              <h2 className="logo">
                Arpegg.<span>io</span>
              </h2>
            </Fader>
            <Fader delay="0.8s">
              <h1>Find people to experience making music with</h1>
            </Fader>
            <Fader delay="1.2s">
              <p>
                Making music is a great feeling. Making music with others is
                just that much better. On this <span>free</span> platform you’ll
                find your missing band member or members.
              </p>
            </Fader>
            <Fader delay="1.5s">
              <Button text="Get Started" to="/app" />
            </Fader>
            <Fader delay="1.8s">
              <ItemGrid>
                {[
                  { text: "Find Band members", active: true },
                  { text: "Promote gigs (Coming soon)" },
                  {
                    text:
                      "Get in touch with performers for your event (Coming soon)",
                  },
                ].map(item => (
                  <Item active={item.active} key={item}>
                    <h4>{item.text}</h4>
                  </Item>
                ))}
              </ItemGrid>
            </Fader>
          </div>
        </DarkArea>
        <div></div>
      </Container>
    </Background>
  )
}

export default IndexPage
