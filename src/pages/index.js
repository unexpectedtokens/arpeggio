import React from "react"
import {
  ItemGrid,
  Container,
  DarkArea,
  Background,
  Fader,
  Item,
  LogoGrid,
  Footer,
} from "../components/Landing"
import {
  FaGuitar,
  FaGithub,
  FaTwitter,
  FaHeart,
  FaFacebookF,
} from "react-icons/fa"
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
                find your missing band member or members. All over the world.
              </p>
            </Fader>
            <Fader delay="1.5s">
              <Button text="Get Started" to="/app" />
            </Fader>
            <Fader delay="1.8s">
              <ItemGrid>
                {[
                  {
                    text: "Find Band members",
                    active: true,
                  },
                  { text: "Promote gigs (Coming soon)" },
                  {
                    text: "Get in touch with performers (Coming soon)",
                  },
                ].map(item => (
                  <Item active={item.active} key={item.text}>
                    <FaGuitar size="4em" />
                    <h4>{item.text}</h4>
                  </Item>
                ))}
              </ItemGrid>
            </Fader>
            <Fader delay="2s">
              <LogoGrid>
                <a href="/">
                  <FaTwitter size="3rem" />
                </a>
                <a href="/">
                  <FaFacebookF size="3rem" />
                </a>
                <a href="https://github.com/unexpectedtokens/">
                  <FaGithub size="3rem" />
                </a>
              </LogoGrid>
            </Fader>
            <Fader delay="2.3s">
              <Footer>
                <p>
                  This project is open source.{" "}
                  <a href="https://github.com/unexpectedtokens/arpeggio">
                    Click here to view the source.
                  </a>
                </p>
                <p>
                  Built with <FaHeart size="1rem" /> and{" "}
                  <a href="https://gatsbyjs.org">Gatsby</a> by{" "}
                  <a href="https://dtronics.dev">Daniel de Jong</a>.
                </p>
              </Footer>
            </Fader>
          </div>
        </DarkArea>
      </Container>
    </Background>
  )
}

export default IndexPage
