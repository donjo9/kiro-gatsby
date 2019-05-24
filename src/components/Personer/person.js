import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Personale = styled.div`
   {
    border-radius: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 8px;
    padding: 8px;
    box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
    border-radius: 10px;
    background: var(--background);
  }
  & h3 {
    color: white;
  }

  & img {
    width: 100%;
    border-radius: 10px;
    object-position: center;
    object-fit: contain;
  }
  & span {
    grid-column: 1 / 3;
  }
`
const person = props => {
  return (
    <Personale>
      <Img fluid={props.img.childImageSharp.fluid} alt={props.navn} />
      <h3>{props.navn}</h3>
      <span>{props.children}</span>
    </Personale>
  )
}
export default person