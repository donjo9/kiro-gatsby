import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import "./layout.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const title = "Kiropraktorhuset"
  return (
    <main>
      <Helmet
        htmlAttributes={{
          lang: "da",
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: `Specialister i bevægeapparatet  
            ÅBNINGSTIDER  
            Mandag kl. 08.00 - 18.00
            Tirsdag kl. 08.00 - 18.00
            Onsdag kl. 08.00 - 18.00
            Torsdag kl. 08.00 - 18.00
            Fredag kl. 08.00 - 18.00  
            `,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: `Specialister i bevægeapparatet  
            ÅBNINGSTIDER  
            Mandag kl. 08.00 - 18.00
            Tirsdag kl. 08.00 - 18.00
            Onsdag kl. 08.00 - 18.00
            Torsdag kl. 08.00 - 18.00
            Fredag kl. 08.00 - 18.00  
            `,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: "keywords",
            content: "kiropraktor, fysioterapeut, massage",
          },
        ]}
      />
      <Header />
      <section className="MainContent">{children}</section>
      <Footer />
    </main>
  )
}

export default Layout
