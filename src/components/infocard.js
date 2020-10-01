import React from "react"
import Img from "gatsby-image"
const InfoCard = ({ image, position }) => {
  // console.log(image, "em info card")
  return (
    <div className="px-8 py-8">
      {position === "right" ? (
        <div className="flex ">
          <div className=" rounded-lg mr-8  w-1/2 bg-purplelight text-3xl flex items-center px-6 py-2 bg-gradient-to-r from-purple  ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              praesentium minima aspernatur facere, qui ex aperiam debitis,
              voluptatum earum est ducimus quaerat, veritatis ut laboriosam
              beatae dolores? Saepe, ea. Explicabo!
            </p>
          </div>
          <div className=" w-1/2 h-auto ">
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
        <div className="flex">
          <div className=" w-1/2 h-auto ">
            <Img
              className=" rounded-lg"
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              style={{ height: "100%", width: "100%" }}
              imgStyle={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="ml-8 rounded-lg w-1/2  text-palesilver  bg-purplelight text-3xl flex items-center px-6 py-2  bg-gradient-to-l from-purple ">
            <p>
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
