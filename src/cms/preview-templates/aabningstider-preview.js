import React from "react"
import { AaabningstiderTemplate } from "../../components/Aabningstider/aabningstider"
import PreviewWithStyledComponents from "./withStyledComponents"

const AaabningstiderPreview = ({ entry, widgetFor }) => {
  const aabningstiderEntry = entry.getIn(["data", "aabningstider"])
  const aabningstider = aabningstiderEntry ? aabningstiderEntry.toJS() : []

  const saturdaysEntry = entry.getIn(["data", "saturdays"])
  const saturdays = saturdaysEntry ? saturdaysEntry.toJS() : []

  return (
    <PreviewWithStyledComponents>
      <AaabningstiderTemplate
        aabningstider={aabningstider}
        saturdays={saturdays}
      />
    </PreviewWithStyledComponents>
  )
}

export default AaabningstiderPreview
