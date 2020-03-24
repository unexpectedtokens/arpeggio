import styled, { keyframes, css } from "styled-components"
const FadeIn = keyframes`
from{
  opacity: 0;
}to{
  opacity: 1;
}


`
export const Container = styled.div`
  background: linear-gradient(
    to top,
    var(--ColorPrimary),
    var(--ColorPrimaryFaded)
  );
  min-height: 100vh;
  padding: 8rem 0;
  transition: padding 0.3s;
  @media screen and (max-width: 1250px) {
    padding: 0;
  }
  color: #fff;
  a {
    text-decoration: none;
  }

  animation: ${FadeIn} 0.3s;
`
const AuthContent = css`
  transform: translateY(0);
  opacity: 1;
`

export const Content = styled.section`
  margin: 0 auto;
  transition: opacity 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(2rem);
  ${props =>
    props.state === "entered" || props.state === "entering"
      ? AuthContent
      : null}
  min-height: 100vh;
  max-width: 1250px;
  background: var(--ColorDark);
  display: flex;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  padding: 2rem 2rem 2rem 0;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const Main = styled.main`
  background: var(--ColorDarkLight);
  flex-basis: 80%;
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
  position: relative;
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
  animation: ${unMountAnimation} 0.2s;
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
  background: var(--ColorDark);
  padding: 3rem;
  margin-bottom: 6rem;
`
export const RouteContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`
