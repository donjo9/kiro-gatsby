import React from "react"
import { Container, Body, Title } from "../../components/boxes"
import { ExtLink } from "../../components/buttons"



const priser = () => {
  return (
    <Container>
      <Title>PRISER</Title>
      <Body>
        Kiropraktisk behandling er en del af sundhedsstyrelsen. Kiropraktorerne
        er idag autoriserede. Det sikrer dig, at kun kiropraktorer, der opfylder
        de uddannelsesmæssige krav til at blive autoriserede af
        Sundhedsstyrelsen, har ret til at kalde sig kiropraktorer. Den
        <h3>Offentlige Sygesikring</h3> yder tilskud til behandling hos kiropraktoren.
        Det sker nøjagtig som hos lægen ved at patienten kvitterer for
        behandlingen, ved at vise sygesikringsbeviset ved hver konsultation.
        Patienten betaler sin andel af regningen til kiropraktoren, der afregner
        den enkelte patients tilskud direkte med Sygesikringen. Er du medlem af
        sygesikringen “Danmark” yder denne forening også tilskud til
        kiropraktisk behandling.
      </Body>
      <Title>DER KRÆVES INGEN LÆGEHENVISNING FOR TILSKUD</Title>
      <Body>
        Honorarer og tilskud pr. 1. april 2019: Ifølge Landsoverenskomsten
        mellem Dansk Kiropraktor Forening og Regionernes Lønnings- og Takstnævn.
      </Body>
      <ExtLink style={{textTransform: "uppercase", marginTop: "15px", display: "block"}}href="https://www.danskkiropraktorforening.dk/media/1394/speciale-53-honorartabel-april-2019.pdf" target="_blank" rel="noopener norefferer">Klik for gældende priser</ExtLink>
    </Container>
  )
}

export default priser