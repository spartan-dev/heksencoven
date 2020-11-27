require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `HekseCoven La Wicca es un camino espiritual.`,
    description: `El primer paso para entender la Wicca o antigua religion es conocer sus raices.`,
    author: `@spartan-dev`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCES_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
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
        icon: `${__dirname}/src/images/usein/VERSION_3SIN_FONDO.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
