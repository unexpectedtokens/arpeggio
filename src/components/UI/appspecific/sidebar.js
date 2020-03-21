import styled from "styled-components"
import { Link } from "@reach/router"
export const SideBar = styled.aside`
  flex-basis: 20%;
  background: var(--ColorDark);
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    align-self: stretch;
    padding-top: 5rem;
    /* width: 90%; */
    display: flex;
    flex-direction: column;

    li {
      list-style: none;
      margin-bottom: 1.5rem;
    }
  }
`

export const SideBarLink = styled(Link)`
  color: #fff;
  position: relative;
  display: block;
  padding: 2rem;
  span {
    position: relative;
    z-index: 1;
    font-size: 1.8rem;
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
    background: linear-gradient(
      to right,
      var(--ColorPrimary),
      var(--ColorPrimaryFaded) 50%
    );
  }
  :hover {
    ::before {
      width: 100%;
      transform: scaleY(1);
    }
  }
`
