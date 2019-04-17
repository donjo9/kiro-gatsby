import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoPath from "../../../static/img/logo-2.png"

const HeaderContainer = styled.header`
   {
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const Logo = styled.img`
   {
    filter: invert(1);
    max-width: 100%;
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
const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoPath} alt="Logo" />
      <Navigation>
        <ul>
          <NavigationItem>
            <Link to="/">Hjem</Link>
          </NavigationItem>
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
            <Link to="/goderaad">Gode råd</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/om">Om</Link>
          </NavigationItem>
        </ul>
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
