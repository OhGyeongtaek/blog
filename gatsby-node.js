const path = require(`path`);

// Create post pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const createPageParams = { graphql, createPage };

  createNotFoundPage(createPageParams);

  createPostPages(createPageParams);
};

// 404페이지 생성
const createNotFoundPage = ({ createPage }) => {
  const NotFoundPage = path.resolve(`src/pages/404.tsx`);
  createPage({
    path: `/404`,
    component: NotFoundPage,
  });
};

// 게시글 페이지 생성
const createPostPages = async ({ graphql, createPage }) => {
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
