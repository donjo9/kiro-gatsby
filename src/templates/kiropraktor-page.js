import React from "react"

import Fag from "../components/Fag/fag"
import Person from "../components/Personer/person"
import PersonContainer from "../components/Personer/personcontainer"
const kiropraktor = () => {
  return (
    <>
      <Fag
        headline="Kiropraktik"
        desciption=" Ex dolor laboris ullamco elit commodo sunt proident aute.s
                    Minim aute voluptate laborum deserunt est elit incididunt
                    quis proident quis ipsum. Est voluptate id velit proident.
                    Cupidatat irure aliqua ipsum exercitation proident irure
                    enim proident sunt labore. Aliqua est minim sunt ex eiusmod
                    laboris anim aliqua qui minim esse et do reprehenderit. Duis
                    ipsum sunt ex deserunt."
      />
      <PersonContainer>
        <Person navn="Henrik Slott Hansen" img="img/henrik.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
        <Person navn="Marc Bjerre Fleury" img="img/marc.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
        <Person navn="Maria S Bendtsen" img="img/maria.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
        <Person navn="Bjarne Halvorsen" img="img/bjarne.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
      </PersonContainer>
    </>
  )
}

export default kiropraktor
