import React from "react"
import styled from "styled-components"

const Container = styled.section`
   {
    margin: 0px 15px;
    background-color: var(--background);
    box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
    border-radius: 10px;
    padding: 15px;
  }
`
const Title = styled.div`
   {
    background-color: var(--background);
    display: inline;
    background-size: 1px 1em;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      text-align: center;
      background: linear-gradient(
        to right,
        var(--background),
        var(--highlight),
        var(--background)
      );
    }

    margin: 0;
    padding: 15px;
    font-size: 24px;
    font-weight: 900;
  }
`

const Body = styled.div`
   {
    background-color: var(--background);
    padding: 15px;

    margin: 0;
  }
`

export default ({ pageContext }) => {
  return (
    <Container>
      <Title>{pageContext.overskrift}</Title>
      <Body dangerouslySetInnerHTML={{ __html: pageContext.body }} />
    </Container>
  )
}
