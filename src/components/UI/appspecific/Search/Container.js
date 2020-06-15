import styled from "styled-components"

export const Container = styled.div`
  margin: 2rem auto;
  /* padding: 10rem 3rem 3rem; */
  display: flex;
  flex-direction: column;
  /* background: var(--ColorDarkLight); */
  position: relative;
  min-height: 50vh;
`
export const Filter = styled.div`
  background: var(--ColorDarkLight);
  /* transform: translate(-50%, -30%); */
  /* position: absolute;
  top: 0;
  left: 50%; */
  width: 95%;
  z-index: 10;
  display: flex;
  align-items: stretch;
  max-width: 86rem;
  p {
    align-self: center;
    padding: 0.5rem;
    font-size: 1.6rem;
  }
`
export const FilterSubmit = styled.button`
  background: linear-gradient(
    to right,
    var(--ColorPrimary),
    var(--ColorPrimaryFaded)
  );
  color: #fff;
  border: none;
  padding: 0 2rem;
  font-size: 1.7rem;
  margin-left: auto;
`
