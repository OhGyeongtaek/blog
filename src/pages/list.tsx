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
  const currentPage = pageContext.page ?? 1;

  const items = useMemo<ListItemProps["item"][]>(
    () =>
      data.allMarkdownRemark.nodes.map((node) => ({
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
    navigate(`${PATH_LIST}page/${page}`);
  };

  return (
    <div>
      <GlobalStyler />
      <Header />
      <Contents>
        <List items={items} onClickItem={handleClickItem} />
        <Pagination
          pageSize={1}
          count={data.allMarkdownRemark.totalCount}
          current={currentPage}
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
  query ($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      skip: $skip
      limit: $limit
    ) {
      totalCount
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
