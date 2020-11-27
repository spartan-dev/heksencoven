import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoCard from "../components/infocard"
import Separador from "../components/separator"
import { graphql } from "gatsby"

const About = (props) => {
  return (
    <div>
      <Layout>
        <Seo title="Acerca de Hekse Coven" />
        <Separador title="La Cueva" ornate="ornate3" />
        <InfoCard
          position="right"
          title="Que Ofrece Hekse Coven"
          content="Ofrecemos clases informativas y divertidas . Es importante para nosotros dar el regalo del conocimiento y asi empoderar a aquellos que desean motivacion y progreso en sus vidas."
          image={props.data.ritual}
        />
        <Separador title="La Ofrenda" ornate="ornate2" />
        <p className="text-2xl px-8 pb-8 font-fondamento font-semibold xl:text-5xl xl:px-16 xl:pb-16">
          En Hekse Coven te brindamos calidad y comunidad en una manera calida ,
          positiva y un excelente ambiente que mereces! Ofrecemos clases y
          cursos variados por expertos en su campo. Siguenos en nuestras redes
          sociales para estar en contacto con nosotros y no perderte de nuestros
          eventos y clases !
        </p>
      </Layout>
    </div>
  )
}

export default About
export const pageQuery = graphql`
  query {
    ritual: file(relativePath: { regex: "/ritual.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
