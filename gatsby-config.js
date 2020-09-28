module.exports = {
  siteMetadata: {
    title: `HekseCoven`,
    description: `A bare-bones Tailwind CSS + Emotion starter to kickoff your project.`,
    author: `@pauloelias`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
