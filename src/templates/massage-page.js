import React from "react"
import { graphql } from "gatsby"
import FagTemplate from "./fag-template"

const massage = ({ data, pageContext }) => {
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

export default massage

export const pageQuery = graphql`
  {
    Ansatte: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "Massør" } }
        fields: { type: { eq: "data" }, slug: { regex: "$/ansatte/" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            name
            img
            description
          }
        }
      }
    }
    Content: markdownRemark(
      frontmatter: { templateKey: { eq: "massage-page" } }
    ) {
      html
      frontmatter {
        overskrift
      }
    }
  }
`
