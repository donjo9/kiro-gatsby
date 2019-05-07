import React from "react"
import Helmet from "react-helmet"

const SEO = props => {
  const title = props.SEOInformation.seotitle || "Kiropraktorhuset Slagelse"
  const description =
    props.SEOInformation.seodescription ||
    `Specialister i bevægeapparatet  
    ÅBNINGSTIDER  
    Mandag kl. 08.00 - 18.00
    Tirsdag kl. 08.00 - 18.00
    Onsdag kl. 08.00 - 18.00
    Torsdag kl. 08.00 - 18.00
    Fredag kl. 08.00 - 18.00  
    `
  const tags = props.SEOInformation.seotags || [
    { tag: "kiropraktor" },
    { tag: "fysioterapeut" },
    { tag: "massage" },
    { tag: "zoneterapi" },
  ]
  const writenTags = tags.map(x => x.tags).join(",")

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang: "da",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: "keywords",
          content: writenTags,
        },
      ]}
    />
  )
}

export default SEO
