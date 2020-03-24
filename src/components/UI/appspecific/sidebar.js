import styled from "styled-components"
import { Link } from "@reach/router"
export const SideBar = styled.aside`
  flex-basis: 20%;
  background: var(--ColorDark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    background: none;
    color: var(--ColorGray);
    border: none;
    font-size: 1.7rem;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  ul {
    align-self: stretch;
    padding-top: 5rem;
    /* width: 90%; */
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
    li {
      list-style: none;
      margin-bottom: 1.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`

export const SideBarLink = styled(Link)`
  color: #fff;
  position: relative;
  display: block;
  padding: 2rem;
  display: flex;
  align-items: center;
  transform: scale(1.02);
  span {
    position: relative;
    z-index: 1;
    font-size: 1.8rem;
  }
  svg {
    fill: #fff;
    font-size: 1.8rem;
    margin-right: 1rem;
    position: relative;
    z-index: 1;
  }
  ::before {
    position: absolute;
    content: "";
    width: ${props => (props.active ? "100%" : "5px")};
    height: 100%;
    transform: scaleY(${props => (props.active ? 1 : 0)});
    top: 0;
    left: 0;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to right,
      var(--ColorPrimaryFaded) calc(100% - 1.5rem),
      var(--ColorPrimary)
    );
  }
  :hover {
    ::before {
      width: 100%;
      transform: scaleY(1);
    }
  }
`
export const IconBar = styled.div`
  display: flex;
  svg {
    fill: var(--ColorGray);
    font-size: 3rem;
  }
`
export const FooterInfo = styled.p`
  padding: 0.5rem;
  color: var(--ColorGray);
  text-align: center;
  font-size: 0.8rem;
  a {
    color: var(--ColorPrimaryFaded);
  }
  svg {
    fill: var(--ColorPrimaryFaded);
    font-size: 0.8rem;
  }
`
