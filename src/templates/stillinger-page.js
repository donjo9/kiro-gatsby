import React from "react"

const Stilinger = ({ data }) => {
  return <div>Stillinger {data.Content.id}</div>
}

export default Stilinger

export const pageQuery = graphql`
  query Stilinger {
    Content: markdownRemark(
      frontmatter: { templateKey: { eq: "stillinger-page" } }
    ) {
      id
    }
  }
`
