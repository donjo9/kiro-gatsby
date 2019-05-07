import React from "react"
import { graphql } from "gatsby"
import FagTemplate from "./fag-template"
import SEO from "../components/SEO"

const kiropraktor = ({ data, pageContext }) => {
  const { edges } = data.Ansatte
  let ansatte = []
  if (edges) {
    ansatte = edges.map(({ node }) => node.frontmatter)
  }
  const { frontmatter, html } = data.Content
  const { SEO: SEOInformation } = frontmatter

  return (
    <>
      <SEO SEOInformation={SEOInformation} />
      <FagTemplate
        overskrift={frontmatter.overskrift}
        html={html}
        ansatte={ansatte}
        special={pageContext.special}
      />
    </>
  )
}

export default kiropraktor

export const pageQuery = graphql`
  query Kiro($maxWidth: Int, $quality: Int) {
    Ansatte: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "Kiropraktor" }, enable: { eq: true } }
        fields: { type: { eq: "data" }, slug: { regex: "$/ansatte/" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            img {
              childImageSharp {
                fluid(maxWidth: $maxWidth, quality: $quality) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
      }
    }
    Content: markdownRemark(
      frontmatter: { templateKey: { eq: "kiropraktor-page" } }
    ) {
      html
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
    }
  }
`
