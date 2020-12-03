const slash = require("slash")
const path = require("path")

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
  return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              slug
              tittle
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        console.log("Error con data contentful", result.errors)
      }

      const blogs = result.data.allContentfulBlog.edges
      blogs.forEach((blog, index) => {
        console.log(blog, "en node")
        const previous =
          index === blogs.length - 1 ? null : blogs[index + 1].node
        const next = index === 0 ? null : blogs[index - 1].node
        createPage({
          path: `blog/${blog.node.slug}`,
          component: blogTemplate,
          context: {
            slug: blog.node.slug,
            previous,
            next,
          },
        })
      })
    })
    .catch((error) => {
      console.log(`Error con Contentful ${error}`)
    })
}
