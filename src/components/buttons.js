import { Link } from "gatsby"
import styled from "styled-components"
const base = {
  border: "solid 1px var(--highlight2)",
  background: "var(--background)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "15px",
  textAlign: "center",
  textDecoration: "none",
  boxShadow: "inset 0px 0px 4px var(--highlight2)",
}

export const hoverEffect = `transition: 250ms;
&:hover,
&:focus {
    border: 1px solid var(--highlight);
  }`
export const Button = styled(Link)`
  ${base}
  ${hoverEffect}
`
export const ExtLink = styled.a`
  ${base}
  ${hoverEffect}
`

export const ButtonBase = base
