import React from "react"
import { graphql } from "gatsby"
import { Container, Body, Title, SubTitle } from "../components/boxes"

const Stilinger = ({ data }) => {
  let opslag = "Ingen stillinger pt."
  if (data) {
    const { Content } = data

    const { frontmatter } = Content
    const opslag = frontmatter.stilling.map(x => {
      console.log(JSON.stringify(opslag, null, 2))
      return (
        <React.Fragment key={x.opslag.beskrivelse + x.opslag.overskrift}>
          <SubTitle>{x.opslag.overskrift}</SubTitle>
          <Body>{x.opslag.beskrivelse}</Body>
        </React.Fragment>
      )
    })
  }

  return (
    <Container>
      <Title>Stillinger:</Title>
      <br />
      {opslag}
    </Container>
  )
}

export default Stilinger

export const pageQuery = graphql`
  query Stilinger {
    Content: markdownRemark(
      frontmatter: { templateKey: { eq: "stillinger-page" } }
    ) {
      frontmatter {
        stilling {
          opslag {
            beskrivelse
            overskrift
          }
        }
      }
    }
  }
`
