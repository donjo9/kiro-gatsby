import React from "react"
import { Title, Container, Body } from "../components/boxes"
import SEO from "../components/SEO"

export default ({ pageContext }) => {
  return (
    <>
    <SEO SEOInformation= {{...pageContext.SEO, seotitle: pageContext.overskrift}}/>
      <Container>
        <Title>{pageContext.overskrift}</Title>
        <Body dangerouslySetInnerHTML={{ __html: pageContext.body }} />
      </Container>
    </>
  )
}
