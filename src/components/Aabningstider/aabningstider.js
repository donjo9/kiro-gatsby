import React from "react"
import styled from "styled-components"

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
    <Aabningstider>
      <h2>Åbningstider</h2>
      <div className="tider">
        <div>Mandag:</div>
        <div> 08.00 – 18.00</div>
        <div>Tirsdag:</div>
        <div> 08.00 – 18.00</div>
        <div>Onsdag:</div>
        <div> 08.00 – 18.00</div>
        <div>Torsdag:</div>
        <div> 08.00 – 18.00</div>
        <div>Fredag:</div>
        <div> 08.00 – 18.00</div>
      </div>
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
}

export default aabningstider
