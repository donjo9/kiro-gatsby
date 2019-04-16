import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return <div>{frontmatter.title}</div>
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
