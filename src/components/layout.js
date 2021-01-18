import React, { useEffect } from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./navbar"
import Footer from "./footer"
import AOS from "aos"
import "aos/dist/aos.css"
export default function Layout({ children }) {
  useEffect(() => {
    AOS.init()
  })
  return (
    <main>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </main>
  )
}
