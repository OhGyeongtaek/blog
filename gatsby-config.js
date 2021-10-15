const host = "https://ogt-blog.netlify.app";

module.exports = {
  siteMetadata: {
    siteUrl: host,
    title: "blog",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/contents/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host,
        sitemap: `${host}/sitemap/sitemap-0.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
  ],
};
