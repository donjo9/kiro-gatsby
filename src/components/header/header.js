import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoPath from "../../../static/img/logo-2.png"
import { ButtonBase } from "../buttons"

const HeaderContainer = styled.header`
   {
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    @media screen and (min-width: 1306px) {
      flex-direction: row;
    }
  }
`
const LogoLink = styled(Link)`
  text-align: center;
`
const Logo = styled.img`
   {
    filter: invert(1);
    max-width: 100%;
    margin: auto;
  }
`
const Navigation = styled.nav`
   {
    display: flex;
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      justify-content: center;
      padding: 0px 30px;
    }
  }
`

const NavigationItem = styled.li`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    padding: 10px;
    border-left: 1px solid var(--highlight);

    a {
      color: white;
      text-decoration: none;
      position: relative;
    }
    a::after {
      content: "";
      display: block;
      height: 2px;
      background-color: var(--highlight);
      transform: scale(0, 1);
      transition: transform ease-in-out 250ms;
    }
    a:hover::after {
      transform: scale(1, 1);
    }
    a:hover {
      color: var(--highlight);
      font-size: 16px;
      cursor: pointer;
    }
    :first-child {
      border-left: none;
    }
  }
`

const Booking = styled.a`
  ${ButtonBase}
  margin: 1em 0;
  max-height: 2.375em;
  align-self: center;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
`

const NavigationList = styled.ul`
  margin: auto;
`
const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo src={LogoPath} alt="Logo" />
      </LogoLink>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <Link to="/kiropraktor">Kiropraktor</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/massage">Massør</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/fysioterapeut">Fysioterapeut</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/zoneterapeut">Zoneterapeut</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/priser">Priser</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/klinikken">Klinikken</Link>
          </NavigationItem>
        </NavigationList>
      </Navigation>
      <Booking
        href="https://w3.kircacs.dk/cacs/clientLogin?0&clinicId=160"
        target="_blank"
        rel="noopener norefferer"
      >
        Book en tid nu
      </Booking>
    </HeaderContainer>
  )
}

export default Header
