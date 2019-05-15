import React from "react"
import {Title, Container, Body} from "../components/boxes"

export default ({ pageContext }) => {
  return (
    <Container>
      <Title>{pageContext.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Container>
  )
}
