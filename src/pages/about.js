import React from "react"
import Layout from "../components/layout"
import InfoCard from "../components/infocard"
import { graphql } from "gatsby"

const About = (props) => {
  return (
    <div>
      <Layout>
        <InfoCard position="right" image={props.data.ritual} />
      </Layout>
    </div>
  )
}

export default About
export const pageQuery = graphql`
  query {
    ritual: file(relativePath: { eq: "ritual.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
