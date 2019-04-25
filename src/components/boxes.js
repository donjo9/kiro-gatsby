
import styled from "styled-components"

export const Container = styled.section`
   {
    margin: 0px 15px;
    background-color: var(--background);
    box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
    border-radius: 10px;
    padding: 15px;
  }
`
export const Title = styled.div`
   {
    background-color: var(--background);
    display: inline-block;
    background-size: 1px 1em;
    position: relative;
    text-align: center;
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
    padding-bottom: 5px;
    margin: 0;
    font-size: 24px;
    font-weight: 900;
  }
`

export const Body = styled.div`
   {
    background-color: var(--background);
    margin: 0;
    padding: 15px 0;
  }
`