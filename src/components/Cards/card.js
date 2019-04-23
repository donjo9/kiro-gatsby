import React from "react"
import styled from "styled-components"

const Card = styled.div`
   {
    position: relative;
    border-radius: 5px;
    background: var(--background);
    border: 0;
    padding: 10px;
    margin: 20px;
    border: 0;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &::before {
    position: relative;
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    left: -1px;
    bottom: -1px;
    background: #fff;
    z-index: -1;
    filter: blur(1px);
  }
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    left: -2px;
    bottom: -2px;
    z-index: -2;
    filter: blur(5px);
  }

  &::after,
  &::before {
    background: linear-gradient(
      215deg,
      var(--highlight),
      rgba(0, 0, 0, 0),
      var(--highlight2)
    );
  }
`

const card = props => {
  return <Card>{props.children}</Card>
}

export default card
