import styled from "styled-components"

export default styled.div`
  padding: 2rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      background: var(--ColorPrimaryFaded);
      padding: 1rem;
      border-radius: 50px;
      list-style: none;
      font-size: 1.2rem;
      /* font-weight: 300; */
      color: #fff;
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
      :not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
`
