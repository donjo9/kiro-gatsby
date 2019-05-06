import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { ButtonBase } from "../buttons"
const Aabningstider = styled.div`
   {
    background-color: var(--background);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h2 {
      text-transform: uppercase;
      margin: auto;
      font-weight: normal;
      margin-bottom: 10px;
    }
    > .tider {
      display: grid;
      grid-template-columns: min-content max-content;
      margin: auto;
      min-width: 200px;
      border-top: 1px solid green;
      border-bottom: 1px solid green;
      justify-content: center;
    }
    > .tider div {
      margin: 5px;
    }
  }
`
const Loerdag = styled.div`
   {
    padding-top: 10px;
    margin: auto;
    label {
      text-align: center;
      display: block;
      cursor: pointer;
    }
  }
`
const LoerdagsInput = styled.input`
   {
    visibility: hidden;
    position: absolute;
    &:checked + label > div {
      height: 100%;
      padding: 20px 10px 0 10px;
    }
  }
`

const Loerdagsliste = styled.div`
   {
    line-height: 1.5;
    padding: 0 10px;
    margin: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    position: absolute;
    bottom: 0;
    background: rgba(33, 94, 129, 1);
    border: 0;
    height: 0px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
`

const ListContainer = styled.ul`
   {
    list-style-type: none;
    padding: 0;
    li:first-child {
      margin-top: 20px;
    }
  }
`

const Attention = styled.div`
  ${ButtonBase}
  display: block;
`

export const AaabningstiderTemplate = props => {
  const tider = props.aabningstider.map(tider => (
    <React.Fragment key={tider.day}>
      <div>{tider.day}:</div>
      <div>
        {tider.open} - {tider.close}
      </div>
    </React.Fragment>
  ))
  const loerdage = props.saturdays.map(lordag => <li key={lordag}>{lordag}</li>)
  return (
    <Aabningstider>
      <h2>Åbningstider</h2>
      <div className="tider">{tider}</div>

      <Loerdag>
        <LoerdagsInput type="checkbox" id="loerdage" />
        <label htmlFor="loerdage">
          <Attention>
            Åbent udvalgte lørdage
            <br />
            Klik for datoer
          </Attention>
          <Loerdagsliste>
            Følgende lørdage er der åben for akut opståede problemer i
            bevægeapparatet
            <ListContainer>{loerdage}</ListContainer>
          </Loerdagsliste>
        </label>
      </Loerdag>
    </Aabningstider>
  )
}
const aabningstider = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          markdownRemark(
            frontmatter: { templateKey: { eq: "aabningstider-component" } }
          ) {
            frontmatter {
              aabningstider {
                day
                open
                close
              }
              saturdays
            }
          }
        }
      `}
      render={data => {
        const { markdownRemark } = data
        return (
          <AaabningstiderTemplate
            aabningstider={markdownRemark.frontmatter.aabningstider}
            saturdays={markdownRemark.frontmatter.saturdays}
          />
        )
      }}
    />
  )
}

export default aabningstider
