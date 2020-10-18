import React from "react"
import Layout from "../components/layout"
import { Hero } from "../components/Home.styled/Hero"
import Seo from "../components/seo"
import { Title1, Title2, ButtonPri } from "../components/UseKit/kitCompos"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import smokeTop from "../images/usein/bigsmokeTope.png"
import smokeBottom from "../images/usein/smokeBottom.png"
import "../styles/app.css"
import InfoCard from "../components/infocard"
import Separator from "../components/separator"
import SectionShop from "../components/sectionshop"
import Image from "../components/image"
const Index = (props) => {
  return (
    <div>
      <Layout>
        <Seo title="Home" />
        <Hero>
          <div className="absolute w-full xl:w-full  h-auto lg:w-full md:w-full sm:w-full">
            <Image
              className="w-full "
              filename="bigsmokeTope"
              alt="smoke deco top"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
          <BackgroundImage
            className="hero"
            fluid={props.data.indexImage.childImageSharp.fluid}
          >
            <div
              className="py-3 px-3 w-10/12 absolute b-solid border-4
             border-palesilver  flex flex-col justify-center 
             items-center  shadow-md
             sm:max-w-lg 
             md:max-w-2xl
             lg:max-w-2xl
             xl:max-w-5xl
             "
            >
              <Title1 color="true"> Liberi et Cantatus</Title1>
              <Title2>Witchcraft & Magic Supplies and witches stuff</Title2>
              <ButtonPri width="large">
                Go now{" "}
                <svg
                  className="w-6 h-6"
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
          <div className="w-full absolute h-auto xl:w-full lg:w-full md:w-full sm:w-full bottom-0">
            <Image
              className="w-full absolute"
              filename="smokeBottom"
              alt="smoke deco bottom"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div>
        </Hero>

        <Separator title="HekseCoven" ornate="ornate3" />
        <InfoCard position="left" image={props.data.infocard1} />
        <InfoCard position="right" image={props.data.infocard2} />
        <Separator title="Suscripciones" ornate="ornate2" />
        <SectionShop />
      </Layout>
    </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { regex: "/ritual.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    infocard1: file(relativePath: { regex: "/libro.jpg/" }) {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    infocard2: file(relativePath: { regex: "/hero.jpg/" }) {
      childImageSharp {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
