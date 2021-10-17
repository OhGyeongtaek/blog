import React, { useMemo } from "react";
import Header from "../components/Header";
import List from "../components/PostList";
import GlobalStyler from "../components/GlobalStyler";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { AllMarkdownRemark } from "../types";
import Pagination from "../components/Pagination";
import { PATH_LIST } from "../consts/path";
import Footer from "../components/Footer";

type Props = {
  data: AllMarkdownRemark;
  pageContext: {
    limit: number;
    page: number;
  };
};

const ListPage = ({ data, pageContext }: Props) => {
  const page = pageContext.page ?? 1;
  const limit = pageContext.limit ?? 10;
  const startItemIndex = (page - 1) * limit;

  const items = useMemo<ListItemProps["item"][]>(
    () =>
      data.allMarkdownRemark.nodes
        .slice(startItemIndex, startItemIndex + limit)
        .map((node) => ({
          id: node.id,
          slug: node.frontmatter.slug,
          title: node.frontmatter.title,
          description: node.frontmatter.description,
          category: node.frontmatter.category,
          date: node.frontmatter.date,
        })),
    []
  );

  const handleClickItem = ({ slug, category }: ListItemProps["item"]) => {
    navigate(`/${category}/${slug}`);
  };

  const handleClickPageButton = (page: number) => {
    navigate(`${PATH_LIST}${page}`);
  };

  return (
    <div>
      <GlobalStyler />
      <Header />
      <Contents>
        <List items={items} onClickItem={handleClickItem} />
        <Pagination
          count={data.allMarkdownRemark.nodes.length}
          current={page}
          onClickButton={handleClickPageButton}
        />
      </Contents>
      <Footer />
    </div>
  );
};

const Contents = styled.main`
  max-width: 800px;
  min-height: 600px;
  padding-top: 40px;
  margin: 0 auto;
`;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          slug
          description
          date
          category
        }
      }
    }
  }
`;

export default ListPage;
