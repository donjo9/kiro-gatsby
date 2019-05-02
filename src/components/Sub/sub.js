import React from "react"
import { Button } from "../buttons"
import styled from "styled-components"
import {Title} from "../boxes"

const Subject = styled.div`
   {
    margin: 10px;
    max-width: 300px;
    background-color: var(--background);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`

const Sub = props => {
  return (
    <Subject>
      <Title>{props.title}</Title>
      <p>{props.children}</p>
      <Button style={{marginTop: "auto"}}to={props.to}>Læs mere</Button>
    </Subject>
  )
}

export default Sub
