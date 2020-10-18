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
        <InfoCard position="right" image={props.data.ritual} />
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
