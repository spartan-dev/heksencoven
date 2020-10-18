import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Separador from "../components/separator"
import Card from "../components/UseKit/Card"
const Contacto = () => {
  return (
    <div>
      <Layout>
        <Seo title="Contacto" />
        <Separador title="Contacto" ornate="ornate2" />
        <Card />
      </Layout>
    </div>
  )
}

export default Contacto
