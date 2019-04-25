import React from "react"
import { graphql } from "gatsby"
import { Container, Title, Body } from "../components/boxes"

export default ({ data }) => {
  const { Klinikken } = data

  return (
    <Container>
      <Title>{Klinikken.frontmatter.overskrift}</Title>
      <Body dangerouslySetInnerHTML={{ __html: Klinikken.html }} />
    </Container>
  )
}

export const pageQuery = graphql`
query KlinikkenPageTemplate {
  Klinikken: markdownRemark(frontmatter: {templateKey: {eq: "klinikken-page"}}) {
    frontmatter {overskrift}
    html
  }
}
`
