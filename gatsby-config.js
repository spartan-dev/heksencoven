module.exports = {
  siteMetadata: {
    title: `HekseCoven`,
    description: `A bare-bones Tailwind CSS + Emotion starter to kickoff your project.`,
    author: `@spartan-dev`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HekseCoven`,
        short_name: `Hekse`,
        start_url: `/`,
        background_color: `#e0e2db;`,
        theme_color: `#7e54c6`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
