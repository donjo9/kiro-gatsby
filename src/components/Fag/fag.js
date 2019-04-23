import React from "react"
import styled from "styled-components"

const Fag = styled.div`
   {
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
`

const FagHeader = styled.div`
   {
    margin: 20px 10px;
  }
`

const fag = props => {
  return (
    <Fag>
      <FagHeader>
        <h1>{props.headline}</h1>
        <span dangerouslySetInnerHTML={{ __html: props.desciption }}></span>
      </FagHeader>
    </Fag>
  )
}

export default fag
