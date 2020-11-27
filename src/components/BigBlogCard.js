import React from "react"
import mini from "../images/usein/VERSION1.png"
import Image from "gatsby-image"
const BigCard = ({ blog }) => {
  console.log(blog, "interno")
  return (
    <div className="mb-24 w-12/12">
      <div className="flex justify-center items-center h-auto">
        <Image
          className="object-cover rounded-full shadow-md"
          fluid={blog.node.image.fluid}
          alt={blog.node.tittle}
          // style={{ height: "100%", width: "100%" }}
          imgStyle={{
            objectFit: "cover",
            position: "relative",
          }}
        />
      </div>

      <div className="relative px-4 -mt-16 sm:w-12/12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            Tiempo de lectura
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">
            {blog.node.tittle}
          </h4>

          <div className="mt-1">
            <p>{blog.node.bodyPost.bodyPost.slice(0, 100)}...</p>
            <span className="text-gray-600 text-sm ">
              {blog.node.createdAt}
            </span>
          </div>
          <div className="mt-4 ">
            <span className="text-teal-600 font-semibold">
              Leer entrada o tiempo de lectura
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard
