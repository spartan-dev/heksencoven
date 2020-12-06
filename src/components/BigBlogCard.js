import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import moment from "moment"
const BigCard = ({ blog }) => {
  const { slug, tittle, image, bodyPost, createdAt } = blog.node
  return (
    <div className="mb-24 w-12/12">
      <div className="flex justify-center items-center h-auto">
        <Image
          className="shadow-md"
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
            {tittle}
          </h4>

          <div className="mt-1">
            <p>{bodyPost.bodyPost.slice(0, 100)}...</p>
            <span className="text-gray-600 text-sm ">
              {moment(createdAt).format("ddd, MMMM D, YYYY, hh:mm a")}
            </span>
          </div>
          <div className="mt-4 ">
            <Link to={slug}>
              <span className="text-teal-600 font-semibold">Leer entrada</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard
