import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Separador from "../components/separator"
import Seo from "../components/seo"
const BlogTemplate = ({ data, pageContext }) => {
  console.log(data, pageContext, "si llegamos ??")
  const { tittle, bodyPost, image, createdAt } = data.contentfulBlog
  const { next, previous, slug } = pageContext
  return (
    <>
      <Layout>
        <Seo title="temporal blog" />
        <Separador title={tittle} ornate="ornate2" />
        <h1>{tittle}</h1>
        <p>{bodyPost.bodyPost}</p>
        <span>{createdAt}</span>
        <ul>
          <li>
            {previous && (
              <Link to={`/blog/${previous.slug}`}>
                <span>{previous.tittle}</span>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.slug}`}>
                <span>{next.tittle}</span>
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    </>
  )
}

export default BlogTemplate

export const blogquery = graphql`
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
`
