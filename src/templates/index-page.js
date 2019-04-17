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

const Focus = styled.section`
   {
    margin: 10px;
    position: relative;
    h1 {
      padding: 10px;
      margin: 5px;
      cursor: pointer;
    }
    &:hover h1:before {
      transition: transform 0.5s;
      transform-origin: top right;
      transform: scale(1);
    }
    h1:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: rgba(31, 86, 117, 0.99);
      border: 1px solid black;
      border-radius: 5px;
      transition: transform 0.5s;
      transform-origin: bottom left;
      transform: scale(0);
    }

    &:hover h1:after {
      transition: transform 0.5s;
      transform-origin: bottom left;
      transform: scale(0);
    }
    h1:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 5px;
      border: 1px solid black;
      transition: transform 0.5s;
      transform-origin: top right;
      transform: scale(1);
    }
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
