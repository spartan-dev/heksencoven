import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"
import BigCard from "../components/BigBlogCard"
import Separador from "../components/separator"
import Seo from "../components/seo"
//className="px-12 mb-12 grid grid-rows-3 grid-flow-col gap-10"
// grid grid-flow-col auto-cols-max
const Blog = ({ data }) => {
  const blogs = data.blogs.edges
  // console.log(blogs, "los blogs")

  return (
    <div>
      <Layout>
        <Seo title="Hekse Coven Blog" />
        <Separador title="Cuentos de noche" ornate="ornate2" />
        <div className="flex justify-center px-12 mt-12 ">
          <div className="">
            <div>
              <BigCard blog={blogs[0]} />
            </div>
            <div className="w-full">
              <BlogCard className="" />
              <BlogCard className="" />
              <BlogCard className="" />
              <BlogCard className="" />
              <BlogCard className="" />
              <BlogCard className="" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
export const blogs = graphql`
  query {
    blogs: allContentfulBlog {
      edges {
        node {
          slug
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
    }
  }
`
