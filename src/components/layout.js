import React from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./navbar"
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}
