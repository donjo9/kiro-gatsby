import React from "react"
import styled from "styled-components"

const Personer = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`
const Persons = props => <Personer>{props.children}</Personer>

export default Persons
