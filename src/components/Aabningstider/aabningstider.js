import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Aabningstider = styled.div`
   {
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
      padding: 20px 0 0 0;
    }
  }
`

const Loerdagsliste = styled.div`
   {
    line-height: 1.5;
    padding: 0;
    margin: 0;
    bottom: 0;
    width: 60%;
    left: 20%;
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
const aabningstider = props => {
  return (
      <StaticQuery
        query={graphql`
          {
            markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
              frontmatter {
                aabningstider {
                  day
                  open
                  close
                }
              }
            }
          }
        `}
        render={data => {
          const { markdownRemark } = data
          const tider = markdownRemark.frontmatter.aabningstider.map(tider => (
            <React.Fragment key={tider.day}>
              <div>{tider.day}:</div>
              <div>
                {tider.open} - {tider.close}
              </div>
            </React.Fragment>
          ))
        return (
          <Aabningstider>
            <h2>Åbningstider</h2>
            <div className="tider">{tider}</div>

      <Loerdag>
        <LoerdagsInput type="checkbox" id="loerdage" />
        <label htmlFor="loerdage">
          Åbent udvalgte lørdage
          <br />
          Klik for datoer
          <Loerdagsliste>
            Følgende lørdage er der åben for akut opståede problemer i
            bevægeapparatet
            <ListContainer>
              <li>d. 12/3 - 2019</li>
              <li>d. 12/3 - 2019</li>
              <li>d. 12/3 - 2019</li>
            </ListContainer>
          </Loerdagsliste>
        </label>
      </Loerdag>
    </Aabningstider>
  )
      }}
    />
  )
}

export default aabningstider
