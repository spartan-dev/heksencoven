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

  return graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
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
      const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
      result.data.allContentfulBlog.edges.forEach((blog) => {
        createPage({
          path: `/${blog.node.tittle}`,
          component: slash(blogTemplate),
          context: {
            tittle: blog.node.tittle,
          },
        })
      })
    })
    .catch((error) => {
      console.log(`Error con Contentful ${error}`)
    })
}
