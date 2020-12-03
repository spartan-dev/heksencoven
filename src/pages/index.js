import React from "react"
import Layout from "../components/layout"
import { Hero } from "../components/Home.styled/Hero"
import Seo from "../components/seo"
import { Title1, Title2, ButtonPri } from "../components/UseKit/kitCompos"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../styles/app.css"
import InfoCard from "../components/infocard"
import Separator from "../components/separator"
import SectionShop from "../components/sectionshop"
import Image from "../components/image"
import Face from "../images/svg/face.svg"
import Insta from "../images/svg/insta.svg"
import Whats from "../images/svg/whats.svg"
const Index = (props) => {
  return (
    <div>
      <Layout>
        <Seo title="Hekse Coven La Wicca es un camino espiritual." />
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
            //className="relative h-screen w-screen flex flex-col justify-center items-center"
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
              <Title2>Camino espiritual hacia la iluminacion</Title2>
              {/*  <ButtonPri width="medium">
                Bewicht
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
              </ButtonPri> */}
              <div className="mt-4 px-12  inline-grid grid-cols-3 gap-x-4 sm:px-0 md:gap-x-16 md:pr-4  lg:gap-x-12 lg:py-12">
                <span className="">
                  <a
                    aria-label="facebook"
                    href="https://www.facebook.com/Heksecoven/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Face className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
                  </a>
                </span>
                <span className="">
                  <a
                    aria-label="instagram"
                    href="https://www.instagram.com/heksecoven/?igshid=1f6yqtjy2roqt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Insta className=" rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight " />
                  </a>
                </span>
                <span className="">
                  <a
                    aria-label="whatsapp"
                    href="http://api.whatsapp.com/send?phone=525549367477&text=Hola!%20Quiero%20hacer%20magia%20en%20el%20coven!"
                  >
                    <Whats className="rounded-full h-16 w-16 bg-purplelight border border-solid border-purplelight" />
                  </a>
                </span>
              </div>
            </div>
          </BackgroundImage>
          {/*    <div className="w-full absolute h-auto xl:w-full lg:w-full md:w-full sm:w-full bottom-0">
            <Image
              className="w-full absolute"
              filename="smokeBottom"
              alt="smoke deco bottom"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          </div> */}
        </Hero>

        <Separator title="HekseCoven" ornate="ornate3" />
        <InfoCard
          position="left"
          image={props.data.infocard1}
          title="Hekse Coven"
          content="El primer paso para entender la Wicca o antigua religion es conocer sus raices. Para cualquier creyente es un requisito basico el entender de donde provienen sus creencias  y aunque es lo basico , es lo que sobre todo se ignora."
        />
        <InfoCard
          position="right"
          image={props.data.infocard2}
          title="Que es la Wicca?"
          content="Es un camino espiritual hacia la iluminacion por medio de la veneracion del Dios y la Diosa, camino orientado hacia la naturaleza, mezclando la tradicion y lo eclectico."
        />
        <Separator title="La Wicca" ornate="ornate2" />
        <InfoCard
          position="left"
          image={props.data.infocard1}
          title="Wicca"
          content="Wicca promueve el pensamiento libre, la creatividad artistica, la indivdualidad y crecimiento personal, espiritual y psiquico. Es una celebracion del ciclo de las estaciones y la vida misma.
          Wicca es tan antigua como nueva."
        />
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
