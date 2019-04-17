import React from "react"
import styled from "styled-components"

const SubsContainer = styled.div`
   {
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
/*
 <style jsx>{`
            .subs {
                max-width: 1300px;
                padding: 0 15px;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;

            }
        `}</style>
*/
const Subs = props => <SubsContainer>{props.children}</SubsContainer>

export default Subs
