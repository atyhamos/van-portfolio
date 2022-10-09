module.exports = {
  siteMetadata: {
    title: `Van's Portfolio`,
    description: `Illustrations and more.`,
    author: `@atyhamos`,
    siteUrl: `https://vanthian.netlify.app/`,
    image: `src/images/van-icon.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 25,
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/van-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "Hygraph",
    //     fieldName: "hygraph",
    //     url: "https://api-ap-southeast-2.hygraph.com/v2/cl87bd94c0ffv01ujbb3f3m0f/master",
    //   },
    // },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-ap-southeast-2.hygraph.com/v2/cl87bd94c0ffv01ujbb3f3m0f/master",
        stages: ["PUBLISHED"],
      },
    },
  ],
}
