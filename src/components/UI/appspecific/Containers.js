import styled from "styled-components"

export const Container = styled.div`
  background: linear-gradient(
    to bottom left,
    var(--ColorPrimary),
    var(--ColorPrimaryFaded)
  );
  min-height: 100vh;
  padding: 8rem 0;
  @media screen and (max-width: 1250px) {
    padding: 0;
  }
  color: #fff;
  a {
    text-decoration: none;
  }
`
export const Content = styled.section`
  min-height: 100vh;
  max-width: 1250px;
  margin: 0 auto;
  background: var(--ColorDark);
  display: flex;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
  padding: 2rem 2rem 2rem 0;
`
export const Main = styled.main`
  background: var(--ColorDarkLight);
  flex-basis: 80%;
  padding: 4rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
`
