import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Separador from "../components/separator"
import { Title2 } from "../components/UseKit/kitCompos"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Eventos = ({ data }) => {
  const { events } = data
  console.log(events)

  return (
    <Layout>
      <Seo title="Eventos" />
      <Separador title="Eventos" ornate="ornate2" />
      <div>
        <Title2>Diciembre</Title2>
      </div>
      {/* <div className="w-full h-auto flex flex-row justify-center items-center"> */}
      {events.edges.map((event) => {
        return (
          <div
            data-aos="fade-left"
            className=" h-auto w-auto mb-16 flex flex-col justify-center items-center  md:ml-4"
          >
            <Img
              className="rounded-lg"
              fluid={event.node.childImageSharp.fluid}
              alt={event.node.childImageSharp.fluid.originalName}
              style={{ height: "70%", width: "70%" }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
        )
      })}
      {/*  </div> */}
    </Layout>
  )
}

export default Eventos
export const events = graphql`
  query {
    events: allFile(filter: { absolutePath: { regex: "/images/events/" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
