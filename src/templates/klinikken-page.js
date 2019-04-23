import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return <div>{frontmatter.title}</div>
}

export const pageQuery = graphql`
  query OmPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "klinikken-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
