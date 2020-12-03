import React from "react"
import mini from "../images/usein/VERSION1.png"
import { Link } from "gatsby"
const BlogCard = ({ blog }) => {
  const { slug, tittle, image, bodyPost, createdAt } = blog.node
  return (
    <>
      <article className="mb-24 bg-white border  rounded-lg overflow-hidden w-full sm:w-auto sm:h-auto ">
        <div className=" pb-2/3">
          <img
            className=" h-48  w-full object-cover"
            src={mini}
            alt="hekse coven"
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
            <span className="text-gray-600 text-sm "> {createdAt}</span>
          </div>
          <div className="mt-4 ">
            <Link to={slug}>
              <span className="text-teal-600 font-semibold">
                Leer entrada o tiempo de lectura
              </span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogCard
