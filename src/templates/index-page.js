import React from "react"
import { graphql } from "gatsby"
import Aabningstider from "../components/Aabningstider/aabningstider"
import CardComponent, { Card, PseudoCard } from "../components/Cards/card"
import CardContainer from "../components/Cards/cardcontainer"
import styled from "styled-components"
import { Button } from "../components/buttons"
import SEO from "../components/SEO"

const CardTider = styled(PseudoCard)`
  min-height: auto;
  grid-column: 1 / -1;
  display: block;
  @media (min-width: 1510px) {
    position: absolute;
    left: 0;
  }
  @media (min-width: 1000px) and (max-width: 1064px) {
    position: absolute;
    left: 0;
  }
`
const Index = styled.section`
   {
    padding: 10px;
  }
`

const Focus = styled.h1`
   {
    margin: 20px 10px;
    font-size: 24px;
  }
`

const Body = styled.section`
   {
    margin: 10px;
  }
`
export const IndexPageTemplate = props => {
  const boxes = props.boxes.map(box => {
    return (
      <CardComponent key={box.title + box.link}>
        <Focus>{box.title}</Focus>
        <Body>{box.body}</Body>
        <Button style={{ marginTop: "auto" }} to={"/" + box.link}>
          {box.buttontext}
        </Button>
      </CardComponent>
    )
  })
  return (
    <Index>
      <CardContainer>
        {boxes}
        <CardTider>
          <Card>
            <Aabningstider />
          </Card>
        </CardTider>
      </CardContainer>
    </Index>
  )
}

const index = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { SEO: SEOInformation } = frontmatter
  return (
    <>
      <SEO SEOInformation={SEOInformation} />
      <IndexPageTemplate boxes={frontmatter.boxes} />
    </>
  )
}

export default index

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        boxes {
          body
          buttontext
          link
          title
        }
        SEO {
          seodescription
          seotitle
          seotags {
            tag
          }
        }
      }
    }
  }
`
