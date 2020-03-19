import React, { useState } from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import "./layout.css"
import { Helmet } from "react-helmet"
import Corvid from "../components/corvid"


// Hook
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }

const Layout = ({ children }) => {
  const [covidhide, setcovidhide] = useLocalStorage("covidhide", false)
  const title = "Kiropraktorhuset"

  return (  
    <main>
      {covidhide !== true ? (
        <Corvid
          dismis={() => {
            setcovidhide(true)
          }}
        />
      ) : null}
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
