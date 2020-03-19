import styled, { keyframes, css } from "styled-components"
import BackgroundIMG from "gatsby-background-image"
export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(730px, 1fr) 1fr;
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
  animation: ${FadeInRight} 1s ${props => (props.delay ? props.delay : "0.5s")}
    ease-out;
  animation-fill-mode: both;
`

export const DarkArea = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: flex-end;
  background: rgba(35, 38, 43, 0.95);
  padding: 7rem 4rem 4rem;
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
`

export const Background = styled(BackgroundIMG)`
  width: 100%;
  min-height: 100%;
  background-size: cover;
`
export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  grid-gap: 4.5rem;
`

const active = css`
  background: linear-gradient(to bottom, #3d4147, #4a302d);
  background-size: 120%;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  opacity: 1;
  h4 {
    color: var(--ColorPrimaryFaded);
  }
`

export const Item = styled.div`
  background: #ccc111;
  padding: 2rem;
  opacity: 0.35;
  background: #3d4147;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  h4 {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  ${props => (props.active ? active : null)}
`
