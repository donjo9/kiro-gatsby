import React, { useMemo } from "react"
import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
import Sub from "../components/Sub/sub"
import Subs from "../components/Sub/subs"

const FagTemplate = props => {
  const ansatte = useMemo(
    () =>
      props.ansatte.map(person => {
        return (
          <Person key={person.name} navn={person.name} img={person.img}>
            {person.description}
          </Person>
        )
      }),
    [props.ansatte]
  )

  const specialer = useMemo(
    () =>
      props.special.map(speciale => (
        <Sub
          key={speciale.overskrift}
          title={speciale.overskrift}
          to={speciale.path}
        >
          {speciale.teaser}
        </Sub>
      )),
    [props.special]
  )
  return (
    <>
      <Fag headline={props.overskrift} desciption={props.html} />
      <Subs>{specialer}</Subs>
      <PersonContainer>{ansatte}</PersonContainer>
    </>
  )
}

export default FagTemplate
