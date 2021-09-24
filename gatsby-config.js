module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog",
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
      },
    },
  ],
};
