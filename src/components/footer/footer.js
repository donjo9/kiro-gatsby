import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
   {
    max-width: 1050px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-self: center;
    width: 100%;
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
      <FooterElement>KiropraktorHuset</FooterElement>
      <FooterElement>Sct. Mikkelsgade 4</FooterElement>
      <FooterElement>4200 Slagelse</FooterElement>
      <FooterElement>Tlf: 58 53 45 55</FooterElement>
      <FooterElement>mail@kiropraktorklinik.dk</FooterElement>
      <FooterElement>© 2019 KiropraktorHuset</FooterElement>
    </FooterContainer>
  )
}

export default Footer
