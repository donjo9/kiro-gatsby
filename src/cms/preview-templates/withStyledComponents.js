import { StyleSheetManager } from "styled-components"

const PreviewWithStyledComponents = ({ children }) => {
  const iframe = document.querySelector("#nc-root iframe")
  const iframeHeadElem = iframe && iframe.contentDocument.head

  if (!iframeHeadElem) {
    return null
  }

  return (
    <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>
  )
}

export default PreviewWithStyledComponents
