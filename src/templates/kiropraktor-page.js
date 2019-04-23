import React from "react"

import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
const kiropraktor = ({data}) => {
  const {edges} = data.Ansatte;
  const ansatte = edges.map(({node}) => {
    const {frontmatter} = node
    return <Person key={frontmatter.name} navn={frontmatter.name} img={frontmatter.img}>{frontmatter.description}</Person>
  })
  return (
    <>
      <Fag
        headline="Kiropraktik"
        desciption=" Ex dolor laboris ullamco elit commodo sunt proident aute.s
                    Minim aute voluptate laborum deserunt est elit incididunt
                    quis proident quis ipsum. Est voluptate id velit proident.
                    Cupidatat irure aliqua ipsum exercitation proident irure
                    enim proident sunt labore. Aliqua est minim sunt ex eiusmod
                    laboris anim aliqua qui minim esse et do reprehenderit. Duis
                    ipsum sunt ex deserunt."
      />
      <PersonContainer>
      {ansatte}
      </PersonContainer>
    </>
  )
}

export default kiropraktor

export const pageQuery = graphql`
  {
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
            img
            description
          }
        }
      }
    }
  }
`
