// This is adapted directly from the official gatsby-starter-default
// https://github.com/gatsbyjs/gatsby-starter-default
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImg from "../images/usein/VERSION1.png"
function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: `og:title`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://heksecoven.com`,
        },
        {
          property: `og:image`,
          content: ogImg,
        },
        {
          property: `og:image:height`,
          content: 140,
        },
        {
          property: `og:image:width`,
          content: 512,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Hekse Coven`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:description`,
          content: `summary_large_image`,
        },
        {
          name: `keywords`,
          content: `wicca, espiritual, iluminacion, creencias, veneracion, naturaleza, eclectico, pensamiento,libre, creatividad`,
        },
        {
          name: `robots`,
          content: `INDEX,FOLLOW`,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={"https://heksecoven.com"} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
