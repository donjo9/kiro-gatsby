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
    height: 1px;
    text-align: center;
    box-shadow: 1px -1px 2px var(--highlight), -1px 1px 2px var(--highlight2);
    background-color: var(--highlight2);
  }
  padding-bottom: 5px;
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: bolder;
`

export const Body = styled.div`
   {
    background-color: var(--background);
    margin: 0;
    padding: 15px 0;
  }
`

export const SubTitle = styled.h3`
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
    height: 1px;
    text-align: center;
    box-shadow: 1px -1px 2px var(--highlight), -1px 1px 2px var(--highlight2);
    background-color: var(--highlight2);
  }
  padding-bottom: 5px;

  margin: 20px 0 0 0;
  font-weight: bolder;
`
