const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create post pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const PostTemplate = path.resolve(`src/pages/post.tsx`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            title
            description
            date
            hash
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/post/${node.frontmatter.slug}`,
      component: PostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
