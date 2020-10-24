import React from "react"
import Img from "gatsby-image"
const InfoCard = ({ image, position }) => {
  // console.log(image, "em info card")
  return (
    <div className="px-8 py-8">
      {position === "right" ? (
        <div className=" flex flex-col md:flex-row  md:h-auto">
          <div
            data-aos="fade-right"
            className=" mb-4 md:w-1/2 md:mb-0 font-cinzel  h-auto rounded-lg   bg-purplelight text-3xl flex items-center px-6 py-2 bg-gradient-to-r from-purple  "
          >
            <p className="text-base   text-palesilver sm:text-xl md:text-2xl xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              praesentium minima aspernatur facere, qui ex aperiam debitis,
              voluptatum earum est ducimus quaerat, veritatis ut laboriosam
              beatae dolores? Saepe, ea. Explicabo!
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
            className="md:w-1/2 rounded-lg font-cinzel  bg-purplelight  flex items-center px-6 py-2  bg-gradient-to-l from-purple "
          >
            <p className="text-base   text-palesilver sm:text-xl md:text-2xl xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              praesentium minima aspernatur facere, qui ex aperiam debitis,
              voluptatum earum est ducimus quaerat, veritatis ut laboriosam
              beatae dolores? Saepe, ea. Explicabo!
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
