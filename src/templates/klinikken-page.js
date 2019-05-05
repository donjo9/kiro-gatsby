import React from "react"
import { graphql } from "gatsby"
import { Container, Title, Body } from "../components/boxes"
import SEO from "../components/SEO"

export default ({ data }) => {
  const { Klinikken } = data
  const { SEO: SEOInformation } = Klinikken.frontmatter
  return (
    <>
      <SEO SEOInformation={SEOInformation} />
      <Container>
        <Title>{Klinikken.frontmatter.overskrift}</Title>
        <Body dangerouslySetInnerHTML={{ __html: Klinikken.html }} />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query KlinikkenPageTemplate {
    Klinikken: markdownRemark(
      frontmatter: { templateKey: { eq: "klinikken-page" } }
    ) {
      frontmatter {
        overskrift
        SEO {
          seodescription
          seotitle
          seotags {
            tag
          }
        }
      }
      html
    }
  }
`
