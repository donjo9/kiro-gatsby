import React from "react"
import { graphql } from "gatsby"
import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
import Sub from "../components/Sub/sub"
import Subs from "../components/Sub/subs"

const fysioterapeut = ({ data }) => {
  const { edges } = data.Ansatte
  const ansatte = edges.map(({ node }) => {
    const { frontmatter } = node
    return (
      <Person
        key={frontmatter.name}
        navn={frontmatter.name}
        img={frontmatter.img}
      >
        {frontmatter.description}
      </Person>
    )
  })
  const { frontmatter, html } = data.Content
  const specialer = frontmatter.special.map(speciale => (
    <Sub key={speciale.overskrift} title={speciale.overskrift}>{speciale.teaser}</Sub>
  ))

  return (
    <>
      <Fag headline={frontmatter.overskrift} desciption={html} />
      <Subs>{specialer}</Subs>
      <PersonContainer>{ansatte}</PersonContainer>
    </>
  )
}

export default fysioterapeut

export const pageQuery = graphql`
  {
    Ansatte: allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: "Fysioterapeut" } }
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
      frontmatter: { templateKey: { eq: "fysioterapeut-page" } }
    ) {
      html
      frontmatter {
        overskrift
        special {
          overskrift
          body
          teaser
        }
      }
    }
  }
`
