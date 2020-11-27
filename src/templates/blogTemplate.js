import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Separador from "../components/separator"
import Seo from "../components/seo"
const BlogTemplate = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <Seo title="temporal blog" />
        <Separador title="Titulo Blog" ornate="ornate2" />
        <h1>Blog recibe props</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
          sapiente excepturi. Ab commodi sunt nulla similique ipsam a in dolor,
          tempore, corporis esse dolorum nam velit illum voluptatibus
          perspiciatis vitae.
        </p>
        <span>aca va la fecha supongo ??</span>
      </Layout>
    </>
  )
}

export default BlogTemplate

/* export const blogquery = graphql`
  query BlogBySlug($slug:!String) {
    contentfulBlog(slug:{eq:$slug}){
      tittle
      bodyPost{
          bodyPost
        }
        image{
          fluid{
            src
          }
        } 
    }
  }
` */
