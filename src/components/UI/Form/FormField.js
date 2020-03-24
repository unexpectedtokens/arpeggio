import styled from "styled-components"

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  label {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

export const Input = styled.input`
  border: none;
  background: var(--ColorDark);
  padding: 2rem 0;
  text-indent: 2rem;
  font-size: 1.8rem;
  color: #fff;
  ::placeholder {
    color: var(--ColorGray);
  }
`

export const Area = styled.textarea``
