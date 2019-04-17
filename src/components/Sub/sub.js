import React from "react"
import { Link } from "gatsby"
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

const Button = styled(Link)`
  border: solid 1px var(--highlight2);
  background: var(--background);
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  box-shadow: inset 0px 0px 4px var(--highlight2);
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
