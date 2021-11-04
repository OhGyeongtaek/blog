import React from "react";
import List from "../components/PostList";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { AllMarkdownRemark } from "../types/MarkdownRemark";
import Pagination from "../components/Pagination";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";
import useListUrl from "../hooks/useListUrl";
import { POST_LIMIT } from "../consts/pagination";

type Props = {
  data: AllMarkdownRemark;
  pageContext: {
    limit: number;
    page: number;
  };
};

const GyeongLog = ({ data, pageContext }: Props) => {
  const [searchValues, setSearchValues] = useListUrl();

  const { nodes, totalCount } = data.allMarkdownRemark;

  const items = nodes.slice((searchValues.page - 1) * POST_LIMIT, POST_LIMIT);

  const handleClickItem = ({ frontmatter }: ListItemProps["item"]) => {
    navigate(`/${frontmatter.category}/${frontmatter.slug}`);
  };

  const handleClickPageButton = (page: number) => {
    setSearchValues.setPage(page);
  };

  return (
    <MainLayout>
      <SEO title="게시글 목록" />
      <Contents>
        <List items={items} onClickItem={handleClickItem} />
        <Pagination
          count={totalCount}
          current={searchValues.page}
          rowLimit={pageContext.limit}
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
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount

      group(field: frontmatter___category) {
        totalCount
        fieldValue
      }

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

export default GyeongLog;
