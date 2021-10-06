import React, { useMemo } from "react";
import Header from "../components/Header";
import List from "../components/PostList";
import GlobalStyler from "../components/GlobalStyler";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import PostsAutoComplate, { PostItems } from "../components/PostsAutoComplate";
import { AllMarkdownRemark, RemarkNode } from "../types";

type Props = {
  data: AllMarkdownRemark;
  pageContext: {
    limit: number;
    page: number;
  };
};

const ListPage = ({ data, pageContext }: Props) => {
  // const { page, limit } = pageContext;
  // const startItemIndex = (page - 1) * limit;

  // const items = useMemo<ListItemProps["item"][]>(
  //   () =>
  //     data.allMarkdownRemark.nodes
  //       .slice(startItemIndex, startItemIndex + limit)
  //       .map((node) => ({
  //         id: node.id,
  //         slug: node.frontmatter.slug,
  //         title: node.frontmatter.title,
  //         description: node.frontmatter.description,
  //         date: node.frontmatter.date,
  //       })),
  //   []
  // );

  // const autoComplateItems = useMemo<PostItems[]>(
  //   () =>
  //     data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => ({
  //       id,
  //       label: frontmatter.title,
  //       slug: frontmatter.slug,
  //     })),
  //   []
  // );

  // const handleClickItem = (item: ListItemProps["item"]) => {
  //   navigate(item.slug);
  // };

  return (
    <div>dsadsa</div>
    // <div>
    //   <GlobalStyler />
    //   <Header></Header>
    //   <Contents>
    //     <PostsAutoComplate posts={autoComplateItems} />
    //     <List items={items} onClickItem={handleClickItem} />
    //   </Contents>
    // </div>
  );
};

const Contents = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
//       nodes {
//         id
//         frontmatter {
//           title
//           slug
//           description
//           date
//           hash
//         }
//       }
//     }
//   }
// `;

export default ListPage;
