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

const Corvid = (props) => {
  return (
    <ModalView onClick={props.dismis}>
      <CORVIDContainer>
        <p>
          Fra ‪mandag den 20. april kan Kiropraktorhuset Slagelse begynde at øge
          aktiviteten frem mod mere sædvanligt niveau Det betyder, at vi
          gradvist kan tage imod flere patienter. Der er dog stadig
          begrænsninger. Alle patienter vil fortsat blive vurderet af en
          kiropraktor, forud for at man kan modtage behandling i klinikken. Vi
          følger Sundhedsstyrelsens anbefalinger nøje.
        </p>
        <p>📞Telefonen 58534555 er åben mandag - fredag 8-13. Lørdag 8-12.</p>
        <p>
          Udenfor telefontiden kan vi kontaktes på{" "}
          <a href="mailto:mail@kiropraktorklinik.dk">
            mail@kiropraktorklinik.dk
          </a>
        </p>
        <h4>Vi gør fortsat hvad vi kan for at minimere smittespredning:</h4>

        <ul>
          <li>
            Hvis du føler dig syg, har feber, hoster eller er forkølet, beder vi
            dig blive hjemme.
          </li>
          <li>
            Der er håndsprit indenfor hoveddøren og i receptionen. Afsprit
            hænder både før og efter konsultation.
          </li>
          <li>
            Er du immunsvækket, ældre eller gravid skal du overveje, om du kan
            vente med behandling.
          </li>
          <li>Kom til tiden, og så vidt muligt alene.</li>
          <li>
            Vi begrænser antallet af patienter som opholder sig i klinikken
            samtidig. Hold afstand.
          </li>
          <li>Vi har fortsat fokus på høj hygiejne.</li>
        </ul>
        <p> Massage er også muligt, ring og book en tid.</p>
        <p>Vi glæder os til at tage imod dig</p>
      </CORVIDContainer>
    </ModalView>
  )
}
export default Corvid
