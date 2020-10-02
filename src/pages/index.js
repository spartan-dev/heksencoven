import React from "react"
import Layout from "../components/layout"
import { Hero } from "../components/Home.styled/Hero"
import { Title1, Title2, ButtonPri } from "../components/UseKit/kitCompos"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles/app.css"
import InfoCard from "../components/infocard"
import Separator from "../components/separator"
import SectionShop from "../components/sectionshop"
const Index = (props) => {
  return (
    <div>
      <Layout>
        <Hero>
          <BackgroundImage
            className="hero"
            fluid={props.data.indexImage.childImageSharp.fluid}
          >
            <div
              className="py-3 px-3 absolute b-solid border-4
             border-palesilver  flex flex-col justify-center 
             items-center  shadow-md
             sm:max-w-lg
             md:max-w-2xl
             lg:max-w-2xl
             xl:max-w-5xl
             "
            >
              <Title1 color> Liberi et Cantatus</Title1>
              <Title2>Witchcraft & Magic Supplies and witches stuff</Title2>
              <ButtonPri width="medium">
                Go now{" "}
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  ></path>
                </svg>{" "}
              </ButtonPri>
            </div>
          </BackgroundImage>
        </Hero>
        <Separator title="HekseCoven" />
        <InfoCard position="left" image={props.data.infocard1} />
        <InfoCard position="right" image={props.data.infocard2} />
        <Separator title="Suscripciones Mixtas" />
        <SectionShop />
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

    infocard1: file(relativePath: { eq: "libro.jpg" }) {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    infocard2: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
