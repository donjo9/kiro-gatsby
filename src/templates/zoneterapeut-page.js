import React from "react"
import { graphql } from "gatsby"
import FagTemplate from "./fag-template"

const zoneterapeut = ({ data, pageContext }) => {
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

export default zoneterapeut

export const pageQuery = graphql`
  query Zone($maxWidth: Int, $quality: Int) {
    Ansatte: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "Zoneterapeut" } }
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
      frontmatter: { templateKey: { eq: "zoneterapeut-page" } }
    ) {
      html
      frontmatter {
        overskrift
      }
    }
  }
`
