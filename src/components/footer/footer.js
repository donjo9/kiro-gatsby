import React from "react"
import styled from "styled-components"
import Facebook from "../../../static/img/f_logo_RGB-Blue_100.png"

const FooterContainer = styled.footer`
   {
    max-width: 1050px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-self: center;
    align-items: center;
    width: 100vw;
  }
`
const FooterElement = styled.span`
   {
    justify-self: center;
    padding: 5px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterElement>KiropraktorHuset Slagelse</FooterElement>
      <FooterElement>Sorøvej 9C</FooterElement>
      <FooterElement>4200 Slagelse</FooterElement>
      <FooterElement>Tlf: 58 53 45 55</FooterElement>
      <FooterElement>mail@kiropraktorklinik.dk</FooterElement>
      <FooterElement>
        <a
          href="https://www.facebook.com/KiropraktorhusetSlagelse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="Facebook" width="50px" />
        </a>
      </FooterElement>
    </FooterContainer>
  )
}

export default Footer
