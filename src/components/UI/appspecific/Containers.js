import styled, { keyframes, css } from "styled-components"
const FadeIn = keyframes`
from{

opacity: 0;}to{
opacity: 1;
}


`
export const Container = styled.div`
  min-height: 100vh;
  /* padding: 8rem 0; */
  color: #fff;
  a {
    text-decoration: none;
  }

  animation: ${FadeIn} 1.5s;
`

export const Content = styled.section`
  margin: 0 auto;
  transition: opacity 0.3s, transform 0.3s;

  min-height: 100vh;
  /* background: var(--ColorDark); */
  background: linear-gradient(rgba(33, 33, 33, 0.9), rgba(33, 33, 33, 0.9)),
    url("https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  display: flex;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  padding: 2rem 2rem 2rem 0;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const Main = styled.main`
  background: var(--ColorDark);
  /* flex-basis: 82.5%; */
  flex-grow: 1;
  padding: 4rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 10;
  min-height: 90vh;
`

const MountAnimation = keyframes`
from{
  transform: translateY(20rem);
  opacity: 0;
  }
to{transform: translateY(0);
  opacity: 1;
  }
  

`
const MountedCss = css`
  animation: ${MountAnimation} 0.6s ease-out;
  animation-delay: ${props => (props.delay ? props.delay : ".3s")};
`

const unMountAnimation = keyframes`
from{
  opacity: 1;
  /* transform: translateY(0); */
  }
to{
  opacity: 0;
  /* transform: translateY(2rem); */
  }
`
const unMountedCss = css`
  animation: ${unMountAnimation} 0.3s;
`

export const Stagger = styled.div`
  ${props => {
    if (props.state === "exiting" || props.state === "exited") {
      return unMountedCss
    } else if (props.state === "entering" || props.state === "entered") {
      return MountedCss
    }
  }}
  animation-fill-mode: both;
`
export const RouteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  /* padding: 5rem 2rem 2rem; */
  flex-direction: column;
  min-height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`
