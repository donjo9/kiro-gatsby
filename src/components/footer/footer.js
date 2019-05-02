import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
   {
    max-width: 1050px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-self: center;
    align-items: center;
    width: 100%;
  }
`
const FooterElement = styled.span`
   {
    justify-self: center;
    padding: 5px;
  }
`
const Facebook = styled.a`
   {
    background-color: rgb(66, 103, 178);
    display: block;
    text-align: center;
    line-height: 1.2em;
    font-size: 1.3rem;
    margin: 0.2em;
    border-radius: 5px;
    color: white;
    text-decoration: none;
    border-width: 1px;
    border-color: rgb(66, 103, 178);
    width: 1.2em;
    height: 1.2em;
    transition: background-color 500ms ease-in-out;
    &:hover,
    &:focus {
      background-color: white;
      color: rgb(66, 103, 178);
    }
  }
`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterElement>KiropraktorHuset Slagelse</FooterElement>
      <FooterElement>Sct. Mikkelsgade 4</FooterElement>
      <FooterElement>4200 Slagelse</FooterElement>
      <FooterElement>Tlf: 58 53 45 55</FooterElement>
      <FooterElement>mail@kiropraktorklinik.dk</FooterElement>
      <FooterElement>
        <Facebook href="https://www.facebook.com/KiropraktorhusetSlagelse/"  target="_blank" rel="noopener noreferrer">
          f
        </Facebook>
      </FooterElement>
    </FooterContainer>
  )
}

export default Footer
