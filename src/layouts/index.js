import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "./layout.css";

const Layout = ({ children }) => (
    <main>
        <Header />
        <section className="MainContent">
        {children}
        </section>
        <Footer />
    </main>
);

export default Layout;
