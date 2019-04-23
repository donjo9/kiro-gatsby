import React, { useMemo } from "react"
import { graphql } from "gatsby"
import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
import Sub from "../components/Sub/sub"
import Subs from "../components/Sub/subs"

const FysioterapeutTemplate = props => {
  const ansatte = useMemo(
    () =>
      props.ansatte.map(person => {
        return (
          <Person key={person.name} navn={person.name} img={person.img}>
            {person.description}
          </Person>
        )
      }),
    [props.ansatte]
  )

  const specialer = useMemo(
    () =>
      props.special.map(speciale => (
        <Sub
          key={speciale.overskrift}
          title={speciale.overskrift}
          to={speciale.path}
        >
          {speciale.teaser}
        </Sub>
      )),
    [props.special]
  )
  return (
    <>
      <Fag headline={props.overskrift} desciption={props.html} />
      <Subs>{specialer}</Subs>
      <PersonContainer>{ansatte}</PersonContainer>
    </>
  )
}
const fysioterapeut = ({ data, pageContext }) => {
  const { edges } = data.Ansatte
  let ansatte = []
  if (edges) {
    ansatte = edges.map(({ node }) => node.frontmatter)
  }
  const { frontmatter, html } = data.Content

  return (
    <>
      <FysioterapeutTemplate
        overskrift={frontmatter.overskrift}
        html={html}
        ansatte={ansatte}
        special={pageContext.special}
      />
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
      }
    }
  }
`
