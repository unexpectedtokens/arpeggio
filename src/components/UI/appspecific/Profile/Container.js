import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
export const Container = styled.div`
  /* margin: 2rem auto;
  padding: 10rem 3rem 3rem; */
  flex-direction: column;
  display: flex;
  position: relative;
  min-height: 50vh;
  align-items: center;
`
export const Banner = styled(BackgroundImage)``

export const InformationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(30rem, 1fr));
`
export const ContentContainer = styled.div``
