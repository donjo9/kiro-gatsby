import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  border: solid 1px var(--highlight2);
  background: var(--background);
  color: white;
  padding: 10px 20px;
  border-radius: 15px;
  text-align: center;
  text-decoration: none;
  box-shadow: inset 0px 0px 4px var(--highlight2);
`
