import React from "react"
import { graphql } from "gatsby"
import { Container, Body, Title } from "../../components/boxes"
import styled from "styled-components"

const ListTitle = styled.input`
   {
    visibility: hidden;
    position: absolute;
    & + label {
      cursor: pointer;
    }
    &:checked ~ div {
      transform-origin: bottom;
      transform: scaleY(1);
      opacity: 1;
      padding: 15px 0;
      transition: all 0.5s ease-in-out;
    }
    & ~ div {
      opacity: 0;
      transform-origin: top;
      transform: scaleY(1, 0);
      padding: 0;
      transition: all 0.5s ease-in-out;
    }
  }
`
const Label = styled.label`
   {
    font-size: 20px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 1px;
      text-align: center;
      background: linear-gradient(
        to right,
        var(--background),
        var(--highlight),
        var(--background)
      );
    }
  }
`
const List = styled.ul`
   {
    list-style-type: none;
    padding-inline-start: 0px;
  }
`
const ListItem = styled.li`
   {
    padding: 5px;
  }
`

const goderaad = ({ data }) => {
  const { Raad } = data
  const grad = Raad.edges.map(({ node }) => (
    <ListItem key={node.frontmatter.overskrift}>
      <ListTitle
        name="overskrift"
        type="radio"
        id={node.frontmatter.overskrift}
      />
      <Label htmlFor={node.frontmatter.overskrift}>
        {node.frontmatter.overskrift}
      </Label>
      <Body>{node.frontmatter.raad}</Body>
    </ListItem>
  ))
  return (
    <Container>
      <Title>Gode Råd</Title>
      <List>{grad}</List>
    </Container>
  )
}

export default goderaad

export const pageQuery = graphql`
  {
    Raad: allMarkdownRemark(
      filter: { fields: { type: { eq: "data" }, slug: { regex: "$/raad/" } } }
    ) {
      edges {
        node {
          frontmatter {
            overskrift
            raad
          }
        }
      }
    }
  }
`