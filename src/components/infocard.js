import React from "react"
import Img from "gatsby-image"
const InfoCard = ({ image, position }) => {
  // console.log(image, "em info card")
  return (
    <div>
      {position === "right" ? (
        <div className="flex ">
          <div className="w-1/2 bg-purplelight text-3xl flex items-center px-6 py-2 bg-gradient-to-r from-purple  ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              praesentium minima aspernatur facere, qui ex aperiam debitis,
              voluptatum earum est ducimus quaerat, veritatis ut laboriosam
              beatae dolores? Saepe, ea. Explicabo!
            </p>
          </div>
          <div className="w-1/2 ">
            <Img
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              /* imgStyle={{
                objectFit: "none",
                objectPosition: "50% 50%",
              }} */
            />
          </div>
        </div>
      ) : position === "left" ? (
        <div className="flex ">
          <div className="w-1/2 h-auto">
            <Img
              fluid={image.childImageSharp.fluid}
              alt={image.childImageSharp.fluid.originalName}
              /*  imgStyle={{
                objectFit: "cover",
              }} */
            />
          </div>
          <div className="w-1/2 h-auto bg-purplelight text-3xl flex items-center px-6 py-2  bg-gradient-to-l from-purple ">
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
