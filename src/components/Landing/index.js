import styled, { keyframes, css } from "styled-components"
import BackgroundIMG from "gatsby-background-image"
export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(730px, 1fr) 1fr;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

const FadeInRight = keyframes`
    from{
        transform: translateX(-100px);
        opacity: 0;
        filter: blur(50%);
    }
    to{
        transform: translateX(0);
        opacity: 1;
filter: blur(50%);
    }
`

export const Fader = styled.div`
  animation: ${FadeInRight} 0.8s
    ${props => (props.delay ? props.delay : "0.5s")} ease-out;
  animation-fill-mode: both;
`

export const DarkArea = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: flex-end;
  background: rgba(35, 38, 43, 0.95);
  padding: 6rem 6rem 2rem;
  box-shadow: 1.5rem 0 5rem rgba(0, 0, 0, 0.5);
  .logo {
    color: #fff;
    font-size: 1.8rem;
    margin-bottom: 12.5rem;
    span {
      color: var(--ColorPrimary);
    }
  }
  .content {
    flex-basis: 730px;
    flex-direction: column;

    h1 {
      font-size: 5rem;
      color: #fff;
      margin-bottom: 2.5rem;
      font-weight: bold;
      /* max-width: 50rem; */
    }
    p {
      color: #c7c7c7;
      font-size: 1.8rem;

      span {
        color: #fff;
        font-weight: bold;
      }
    }
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const Background = styled(BackgroundIMG)`
  width: 100%;
  min-height: 100%;
  background-size: cover;
`
export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 4.5rem;
  margin-bottom: 11.5rem;
  align-items: end;
`

const active = css`
  background: #3d4147;
  background-size: 120%;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  opacity: 1;
  h4 {
    color: var(--ColorGray);
  }
`

export const Item = styled.div`
  padding: 2rem;
  opacity: 0.35;
  background: #3d4147;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--ColorGray);
  h4 {
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
  }
  svg {
    margin-bottom: 2rem;
    fill: var(--ColorPrimaryFaded);
    font-size: 5rem;
  }
  ${props => (props.active ? active : null)}
`
export const LogoGrid = styled.div`
  display: flex;
  margin-bottom: 1rem;
  svg {
    margin-right: 2rem;
    fill: var(--ColorGray);
  }
`
export const Footer = styled.div`
  p {
    font-size: 1.2rem !important;
    color: var(--ColorGray);
    font-weight: 300;

    :not(:last-of-type) {
      margin-bottom: 0.6rem;
    }
    svg {
      fill: var(--ColorPrimaryFaded);
    }
    a {
      color: var(--ColorPrimaryFaded);
      text-decoration: none;
      /* text-shadow: 0 0 1rem var(--ColorPrimaryFaded); */
    }
  }
`
