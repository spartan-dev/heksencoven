import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Separador from "../components/separator"
import { Title2 } from "../components/UseKit/kitCompos"

const Colab = () => {
  return (
    <Layout>
      <Seo title="Colaboracion" />
      <Separador title="Colaboraciones" ornate="ornate2" />
      <div>
        <Title2>Proximamente</Title2>
      </div>
    </Layout>
  )
}

export default Colab
