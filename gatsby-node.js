const path = require(`path`);

let posts = null;

// Create post pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await getPostsData(graphql);

  createRootPage(createPage);

  createNotFoundPage(createPage);

  createPostPages(createPage);
};

const createRootPage = (createPage) => {
  const RootPage = path.resolve(`src/pages/index.tsx`);
  createPage({
    path: `/`,
    component: RootPage,
  });
};

// 404페이지 생성
const createNotFoundPage = (createPage) => {
  const NotFoundPage = path.resolve(`src/pages/404.tsx`);

  createPage({
    path: `/404`,
    component: NotFoundPage,
  });
};

// 게시글 페이지 생성
const createPostPages = async (createPage) => {
  const PostTemplate = path.resolve(`src/pages/post.tsx`);

  posts.forEach((node) => {
    createPage({
      path: `${node.frontmatter.category}/${node.frontmatter.slug}`,
      component: PostTemplate,
      context: {
        id: node.id,
      },
    });
  });
};

const getPostsData = async (graphql) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          frontmatter {
            slug
            title
            category
          }
        }
      }
    }
  `);

  posts = result.data.allMarkdownRemark.nodes;
};
