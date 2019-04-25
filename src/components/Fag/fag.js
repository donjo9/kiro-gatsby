import React from "react"
import styled from "styled-components"
import { Title, Container, Body } from "../boxes"

const Fag = styled.div`
   {
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
`
const fag = props => {
  return (
    <Fag>
      <Container>
        <Title>{props.headline}</Title>
        <Body dangerouslySetInnerHTML={{ __html: props.desciption }} />
      </Container>
    </Fag>
  )
}

export default fag
