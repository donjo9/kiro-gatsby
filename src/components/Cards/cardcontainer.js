import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
   {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 500px));
    justify-content: center;
    margin: 10px;
    grid-gap: 25px;
  }
`

const cardcontainer = props => {
  return <CardContainer>{props.children}</CardContainer>
}

export default cardcontainer
