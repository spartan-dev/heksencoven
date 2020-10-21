import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"
import Separador from "../components/separator"
import Seo from "../components/seo"
const Blog = ({ data }) => {
  console.log(data, "los blogs")
  return (
    <div>
      <Layout>
        <Seo title="Hekse Coven Blog" />
        <Separador title="Cuentos de noche" ornate="ornate2" />
        <div className="flex justify-center px-12 ">
          <div className="px-12 mb-12 grid grid-rows-3 grid-flow-col gap-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Blog
export const blogs = graphql`
  query {
    allblogs: allContentfulBlog {
      edges {
        node {
          tittle
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
