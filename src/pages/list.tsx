import React, { useMemo } from "react";
import List from "../components/PostList";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { AllMarkdownRemark } from "../types";
import Pagination from "../components/Pagination";
import { PATH_LIST } from "../consts/path";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";

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
    <MainLayout>
      <SEO title="게시글 목록" />
      <Contents>
        <List items={items} onClickItem={handleClickItem} />
        <Pagination
          rowLimit={pageContext.limit}
          count={data.allMarkdownRemark.totalCount}
          current={currentPage}
          onClickButton={handleClickPageButton}
        />
      </Contents>
    </MainLayout>
  );
};

const Contents = styled.main`
  max-width: 800px;
  min-height: 600px;
  padding-top: 40px;
  margin: 0 auto;
`;

export const query = graphql`
  query ($skip: Int = 0, $limit: Int = 10) {
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
