import React from "react"
import { graphql } from "gatsby"
import FagTemplate from "./fag-template"

const kiropraktor = ({ data, pageContext }) => {
  const { edges } = data.Ansatte
  let ansatte = []
  if (edges) {
    ansatte = edges.map(({ node }) => node.frontmatter)
  }
  const { frontmatter, html } = data.Content

  return (
    <>
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
        frontmatter: { type: { eq: "Kiropraktor" } }
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
      }
    }
  }
`
