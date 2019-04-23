import React from "react"
import { graphql } from "gatsby"
import Aabningstider from "../components/Aabningstider/aabningstider"
import Card from "../components/Cards/card"
import CardContainer from "../components/Cards/cardcontainer"
import styled from "styled-components"
import { Button } from "../components/buttons"

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
      <Card key={box.title + box.link}>
        <Focus>{box.title}</Focus>
        <Body>{box.body}</Body>
        <Button to={box.link}>{box.buttontext}</Button>
      </Card>
    )
  })
  return (
    <Index>
      <CardContainer>
        <Card>
          <Aabningstider />
        </Card>
        {boxes}
      </CardContainer>
    </Index>
  )
}

const index = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return <IndexPageTemplate boxes={frontmatter.boxes} />
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
      }
    }
  }
`
