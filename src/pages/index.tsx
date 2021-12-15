import React from "react";
import List from "../components/PostList";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { AllMarkdownRemark } from "../types/MarkdownRemark";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";

type Props = {
  data: AllMarkdownRemark;
};

const GyeongLogPostList = ({ data }: Props) => {
  const handleClickItem = ({ frontmatter }: ListItemProps["item"]) => {
    navigate(`/${frontmatter.category}/${frontmatter.slug}`);
  };

  return (
    <>
      {data && (
        <MainLayout>
          <SEO title="게시글 목록" />
          <Contents>
            <List
              postData={data}
              filter
              pagination
              onClickItem={handleClickItem}
            />
          </Contents>
        </MainLayout>
      )}
    </>
  );
};

const Contents = styled.main`
  max-width: 1000px;
  min-height: 600px;
  padding-top: 40px;
  margin: 0 auto;

  & .chip-group {
    text-align: center;
    margin-bottom: 20px;
  }

  & .chip-group .chip {
    margin: 0 4px;
  }
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

export default GyeongLogPostList;
