import React from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./navbar"
import Footer from "./footer"
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </>
  )
}
