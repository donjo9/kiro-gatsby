import React from "react"

import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
import Sub from "../components/Sub/sub"
import Subs from "../components/Sub/subs"

const fysioterapeut = ({data}) => {
  const {edges} = data.Ansatte;
  const ansatte = edges.map(({node}) => {
    const {frontmatter} = node
    return <Person key={frontmatter.name} navn={frontmatter.name} img={frontmatter.img}>{frontmatter.description}</Person>
  })
  return (
    <>
      <Fag
        headline="Fysioterapi"
        desciption="Ex dolor laboris ullamco elit commodo sunt proident aute.
        Minim aute voluptate laborum deserunt est elit incididunt
        quis proident quis ipsum. Est voluptate id velit proident.
        Cupidatat irure aliqua ipsum exercitation proident irure
        enim proident sunt labore. Aliqua est minim sunt ex eiusmod
        laboris anim aliqua qui minim esse et do reprehenderit. Duis
        ipsum sunt ex deserunt."
      />
      <Subs>
        <Sub title="Børnefys" selected={true}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          accusantium soluta. Pariatur commodi dicta aliquid quaerat doloremque
          veniam voluptas, unde quia molestiae repellat corporis asperiores
          cumque error beatae nulla architecto.
        </Sub>
        <Sub title="Kranio Sakral">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          accusantium soluta. Pariatur commodi dicta aliquid quaerat doloremque
          veniam voluptas, unde quia molestiae repellat corporis asperiores
          cumque error beatae nulla architecto.
        </Sub>
        <Sub title="Børnefys">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
          accusantium soluta. Pariatur commodi dicta aliquid quaerat doloremque
          veniam voluptas, unde quia molestiae repellat corporis asperiores
          cumque error beatae nulla architecto.
        </Sub>
      </Subs>
      <PersonContainer>
        {ansatte}
      </PersonContainer>
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
  }
`
