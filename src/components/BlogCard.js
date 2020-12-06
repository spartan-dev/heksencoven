import React from "react"
import Image from "gatsby-image"
import moment from "moment"
import { Link } from "gatsby"
const BlogCard = ({ blog }) => {
  const { slug, tittle, image, bodyPost, createdAt } = blog.node
  return (
    <>
      <article className="mb-24 bg-white border  rounded-lg overflow-hidden w-full sm:w-auto sm:h-auto ">
        <div className=" pb-2/3">
          <Image
            className="object-cover shadow-md h-48"
            fluid={image.fluid}
            alt={tittle}
            // style={{ height: "100%", width: "100%" }}
            imgStyle={{
              objectFit: "cover",
              position: "relative",
            }}
          />
        </div>

        <div className="p-6">
          <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
            Tiempo de lectura
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">
            {tittle}
          </h4>

          <div className="mt-1">
            <p>{bodyPost.bodyPost.slice(0, 100)}</p>
            <span className="text-gray-600 text-sm ">
              {" "}
              {moment(createdAt).format("ddd, MMMM D, YYYY, hh:mm a")}
            </span>
          </div>
          <div className="mt-4 ">
            <Link to={slug}>
              <span className="text-teal-600 font-semibold">Leer entrada</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogCard
