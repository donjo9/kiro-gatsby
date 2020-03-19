import React from "react"
import styled from "styled-components"

const CORVIDContainer = styled.div`
  position: relative;  
  background-color: var(--background);
  box-shadow: 1px -1px 5px var(--highlight), -1px 1px 5px var(--highlight2);
  border-radius: 10px;
  padding: 10px;
  max-width: 600px;
  margin: 0px auto;
`

const ModalView = styled.div`
  position: fixed;
  top: 0px;
  
  background-color: rgba(150, 150, 150, 0.5);
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  z-index: 2;
  padding: 10px;
`

const Corvid = props => {

  return (
    <ModalView onClick={props.dismis}>  
      <CORVIDContainer>
        <p>
          Kiropraktorhuset gør alt hvad vi kan for at stoppe smittespredning af
          Corona/COVID-19 og samtidig hjælpe de af jer, der har brug for
          nødvendig behandling. Vi har åbent for behandling i overensstemmelse
          med Sundhedsstyrelsens retningslinjer.{" "}
        </p>
        <p>
          Har du smerter, der nedsætter din arbejdsevne, dit funktionsniveau
          eller din livskvalitet, vil du stadig kunne få tid til behandling.
        </p>
        <p>
          Er du i et igangværende behandlingsforløb, hvor udsættelse af
          yderligere behandling vurderes at kunne medføre forværring, fortsættes
          forløbet.
        </p>
        <h4>Derfor gør vi følgende:</h4>

        <ul>
          <li>I øjeblikket er der en sekretær på telefonen fra 8-12.</li>
          <li>Der er en kiropraktor klinikken fra 9-13.</li>
          <li>
            Send en mail til{" "}
            <a href="mailto:mail@kiropraktorklinik.dk">
              mail@kiropraktorklinik.dk
            </a>{" "}
            hvis du har spørgsmål eller vil ringes op.
          </li>
          <li>Du må ikke bare møde op på klinikken.</li>
          <li>
            Føler du dig syg, har feber eller hoste, skal du aflyse din tid.
          </li>
          <li>
            Brug ikke mere tid end nødvendigt på klinikken. Ankom til din tid
            rimeligt præcist.
          </li>
          <li>Tag ikke venner eller familie med.</li>
          <li>Afsprit hænderne når du kommer til klinikken.</li>
          <li>Hold afstand og undgå så vidt muligt at røre ved ting.</li>
        </ul>
        <strong>VI PASSER PÅ HINANDEN</strong>
        <p>De bedste hilsner fra Kiropraktorhuset</p>
      </CORVIDContainer>
    </ModalView>
  )
}
export default Corvid
