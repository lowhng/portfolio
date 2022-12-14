/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Wei Hong",
    description: "The amazing stuff Wei Hong creates, visualized.",
    author: "Wei Hong Lo",
    twitterUsername: "barcadia",
    facebookUsername: "lowhng95",
    instagramUsername: "weihong.life",
    linkedinUsername: "weihonglo",
    image: "/weihong-banner.jpg",
    siteUrl: "https://weihong.site",
    developerName: "Wei Hong Lo",
    developerUrl: "https://www.weihong.site",
    oriDeveloperName: "Morgan Baker Development",
    oriDeveloperUrl: "https://www.morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
          spaceId: "5si3lgojj8c5",
        // Learn about environment variables: https://gatsby.dev/env-vars
          accessToken: "g0YkId2K1Lc248yTaALjfn-PifrZ-D3lqFwry95A_TA",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
