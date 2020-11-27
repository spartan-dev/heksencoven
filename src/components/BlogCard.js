import React from "react"
import mini from "../images/usein/VERSION1.png"
const BlogCard = () => {
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
            more text to value
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">
            texto para mini titulo
          </h4>

          <div className="mt-1">
            <p>otro mini texto quizae</p>
            <span className="text-gray-600 text-sm "> el date</span>
          </div>
          <div className="mt-4 ">
            <span className="text-teal-600 font-semibold">
              intro o descripcion
            </span>
            <span className="text-gray-600 text-sm">mini texto srppresa</span>
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogCard
