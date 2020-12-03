import React from "react"
import Img from "gatsby-image"
const InfoCard = ({ image, position, content, title }) => {
  // console.log(image, "em info card")
  return (
    <div className="px-8 py-8">
      {position === "right" ? (
        <div className=" flex flex-col md:flex-row  md:h-auto">
          <div
            data-aos="fade-right"
            className=" mb-4 md:w-1/2 md:mb-0 font-cinzel  h-auto rounded-lg   bg-purplelight text-3xl flex flex-col  items-center px-6 py-2 bg-gradient-to-r from-purple  "
          >
            <h2 className="font-extrabold text-2xl xl:text-6xl">{title}</h2>
            <p className="text-base   text-palesilver sm:text-xl md:text-2xl xl:text-4xl">
              {content}
            </p>
          </div>
          <div
            data-aos="fade-left"
            className=" h-auto w-auto  md:w-1/2 md:ml-4 md:h-auto"
          >
            <Img
              className="rounded-lg"
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      ) : position === "left" ? (
        <div className=" flex flex-col md:flex-row md:h-auto">
          <div
            data-aos="fade-right"
            className="mb-4 h-auto w-auto  md:w-1/2 md:mr-4 md:mb-0  md:h-auto"
          >
            <Img
              className=" rounded-lg w-full h-full"
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-1/2 rounded-lg font-cinzel  bg-purplelight  flex flex-col items-center   px-6 py-2  bg-gradient-to-l from-purple "
          >
            <h3 className=" text-2xl sm:3xl  xl:text-6xl font-extrabold">
              {title}
            </h3>
            <p className="text-base   text-palesilver sm:text-xl md:text-2xl xl:text-4xl">
              {content}
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default InfoCard
