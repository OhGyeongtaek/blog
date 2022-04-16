import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";
import MainQueryData from "../types/MainQueryData";
import PaginationList from "../components/PaginationList";

type Props = {
  data: MainQueryData;
};

const GyeongLogPostList = ({ data }: Props) => {
  return (
    <>
      {data && (
        <MainLayout>
          <SEO title="게시글 목록" />
          <Contents>
            <PaginationList data={data.allMarkdownRemark} />
          </Contents>
        </MainLayout>
      )}
    </>
  );
};

const Contents = styled.main`
  max-width: 740px;
  min-height: 600px;
  padding-top: 40px;
  margin: 0 auto;

  & .chip-group {
    text-align: center;
    margin-bottom: 20px;
  }

  & .chip-group .chip {
    margin: 4px;
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
