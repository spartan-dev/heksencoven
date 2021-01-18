import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Separador from "../components/separator"
import Img from "gatsby-image"
import Seo from "../components/seo"
import moment from "moment"
const BlogTemplate = ({ data, pageContext }) => {
  console.log(data, pageContext, "si llegamos ??")
  const { tittle, bodyPost, image, createdAt } = data.contentfulBlog
  const { next, previous, slug } = pageContext
  console.log(image)
  return (
    <>
      <Layout>
        <Seo title="Blog" />
        {/* <Separador title={tittle} ornate="ornate2" />
        <div className=" flex justify-center mb-16 p-8">
          <Img
            className="object-cover max-w-5xl rounded-3xl shadow-md"
            imgStyle={{
              objectFit: "cover",
              position: "relative",
            }}
            fluid={image.fluid}
            alt={tittle}
          />
        </div>

        <p className="text-2xl px-8 pb-8 font-fondamento font-semibold xl:text-5xl xl:px-16 xl:pb-16">
          {bodyPost.bodyPost}
        </p>
        <div className="flex justify-end pr-16 pb-12">
          <span>{moment(createdAt).format("ddd, MMMM D, YYYY, hh:mm a")}</span>
        </div>

        <div className="flex justify-center">
          <ul className="font-fondamento text-2xl flex flex-no-wrap mb-12">
            <li className="ml-6 flex flex-row ">
              {previous && (
                <Link
                  to={`/blog/${previous.slug}`}
                  rel="prev"
                  className="flex flex-row justify-center items-center max-w-full hover:text-purple"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    ></path>
                  </svg>
                  <span>{previous.tittle}</span>
                </Link>
              )}
            </li>
            <li className="ml-6 mr-6">
              {next && (
                <Link
                  to={`/blog/${next.slug}`}
                  rel="next"
                  className="flex flex-row justify-center items-center max-w-full  hover:text-purple "
                >
                  <span>{next.tittle}</span>
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              )}
            </li>
          </ul>
        </div> */}
      </Layout>
    </>
  )
}

export default BlogTemplate

/* export const blogquery = graphql`
  query blogBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      tittle
      createdAt
      bodyPost {
        bodyPost
      }
      image {
        fluid {
          src
        }
      }
    }
  }
` */
