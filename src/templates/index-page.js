import React from "react"
import { graphql } from "gatsby"
import Aabningstider from "../components/Aabningstider/aabningstider"
import Card from "../components/Cards/card"
import CardContainer from "../components/Cards/cardcontainer"
import styled from "styled-components"

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

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.title)
  return (
    <Index>
      <CardContainer>
        <Card>
          <Aabningstider />
        </Card>
        <Card>
          <section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            voluptate mollitia amet voluptas ducimus eligendi repellat atque
            tenetur! Illum numquam distinctio eligendi. Voluptatum, nisi sit
            maiores assumenda tempora reprehenderit nulla.
          </section>
          <Focus>
            <h1>Focus!</h1>
          </Focus>
        </Card>
        <Card>
          <Focus>
            <h1>Focus!</h1>
          </Focus>
          <section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            voluptate mollitia amet voluptas ducimus eligendi repellat atque
            tenetur! Illum numquam distinctio eligendi. Voluptatum, nisi sit
            maiores assumenda tempora reprehenderit nulla.
          </section>
        </Card>
        <Card>
          <section>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            voluptate mollitia amet voluptas ducimus eligendi repellat atque
            tenetur! Illum numquam distinctio eligendi. Voluptatum, nisi sit
            maiores assumenda tempora reprehenderit nulla.
          </section>
          <Focus>
            <h1>Focus!</h1>
          </Focus>
        </Card>
      </CardContainer>
    </Index>
  )
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
