import React from "react"
import { graphql } from "gatsby"
import { Container, Title, Body } from "../components/boxes"
import { Button } from "../components/buttons"
import SEO from "../components/SEO"
import styled from "styled-components"

const SubtopicContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export default ({ data, pageContext }) => {
  const { Klinikken } = data
  const { SEO: SEOInformation } = Klinikken.frontmatter
  const subtopics = pageContext.subtopic.map(x => (
    <Button to={x.path}>{x.title}</Button>
  ))
  return (
    <>
      <SEO SEOInformation={SEOInformation} />
      <Container>
        <Title>{Klinikken.frontmatter.overskrift}</Title>
        <Body dangerouslySetInnerHTML={{ __html: Klinikken.html }} />
        <SubtopicContainer>
          {subtopics}
          <Button to="/stillinger">Stillinger</Button>
        </SubtopicContainer>
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
