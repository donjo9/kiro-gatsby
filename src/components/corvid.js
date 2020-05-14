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
          For at holde smitterisikoen så lav som muligt beder vi om, at man
          ankommer til den aftalte tid, og at man så vidt det er muligt kommer
          uden pårørende. Børn må selvfølgelig gerne komme med enten mor eller
          far. Andre pårørende kan blive bedt om at vente udenfor. På den måde
          kan vi holde antallet af personer i venteværelset nede og derved
          reducere smittefare.
        </p>
        <p>
          Du må meget gerne benytte håndspritten i venteværelset. Det er der for
          din og vores skyld.
        </p>
        <p>
          Når du skal afregne beder vi om at du enten bruger Dankort eller andre
          betalingskort eller mobilepay og ikke kontanter.
        </p>
        <p>Vi sørger for at hygiejnen er i top i hele klinikken.</p>
        <p>For din og for vores sikkerhed!</p>
      </CORVIDContainer>
    </ModalView>
  )
}
export default Corvid
