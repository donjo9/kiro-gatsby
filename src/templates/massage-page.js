import React from "react"

import Person from "../components/Personer/person"
import Fag from "../components/Fag/fag"
import Persons from "../components/Personer/personcontainer"

const massage = props => {
  return (
    <>
      <Fag
        headline="Massage"
        desciption="Ex dolor laboris ullamco elit commodo sunt proident aute.
    Minim aute voluptate laborum deserunt est elit incididunt
    quis proident quis ipsum. Est voluptate id velit proident.
    Cupidatat irure aliqua ipsum exercitation proident irure
    enim proident sunt labore. Aliqua est minim sunt ex eiusmod
    laboris anim aliqua qui minim esse et do reprehenderit. Duis
    ipsum sunt ex deserunt."
      />
      <Persons>
        <Person navn="Karsten Krygermeyer" img="img/karsten.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
        <Person navn="Heeli Ingemann" img="img/heeli.jpg">
          Ex dolor laboris ullamco elit commodo sunt proident aute. Minim aute
          voluptate laborum deserunt est elit incididunt quis proident quis
          ipsum. Est voluptate id velit proident. Cupidatat irure aliqua ipsum
          exercitation proident irure enim proident sunt labore. Aliqua est
          minim sunt ex eiusmod laboris anim aliqua qui minim esse et do
          reprehenderit. Duis ipsum sunt ex deserunt.
        </Person>
      </Persons>
    </>
  )
}

export default massage
