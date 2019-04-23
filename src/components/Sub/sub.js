import React from "react"
import { Button } from "../buttons"
import styled from "styled-components"

const Subject = styled.div`
   {
    margin: 10px;
    max-width: 300px;
    background-color: var(--background);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

const Sub = props => {
  let subClass = ["sub"]
  if (props.selected) {
    subClass.push("selected")
  }
  return (
    <Subject>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
      <Button to="/massage">Læs mere</Button>
    </Subject>
  )
}

export default Sub
