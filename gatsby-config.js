module.exports = {
  siteMetadata: {
    title: `Pando Team`,
    siteUrl: `https://pando.team`,
    description: `Pando team website, developing team.`,
    author: `@truemoein`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/src/images/members/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pando Team`,
        short_name: `Pando`,
        start_url: `/`,
        background_color: `#EAB218`,
        theme_color: `#eaac16`,
        display: `standalone`,
        icon: `src/images/pando.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
