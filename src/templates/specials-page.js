import React from "react"

export default ({ pageContext }) => {
  return (
    <>
      <h1>{pageContext.overskrift}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.body }} />
    </>
  )
}
