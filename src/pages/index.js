import React from "react"
import Layout from "../components/layout"
import { Hero } from "../components/Home.styled/Hero"
import { Title1, Title2 } from "../components/UseKit/kitCompos"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles/app.css"
const Index = (props) => {
  console.log(props)
  return (
    <div>
      <Layout>
        <Hero>
          <BackgroundImage
            className="hero"
            fluid={props.data.indexImage.childImageSharp.fluid}
          >
            <div className="py-3 px-3 absolute b-solid border-4 border-white  flex flex-col justify-center items-center w-full max-w-5xl shadow-md">
              <Title1 color> Incantation</Title1>
              <Title2>Witchcraft & Magic Supplies and withces stuff</Title2>
            </div>
          </BackgroundImage>
        </Hero>
      </Layout>
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "ritual.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
