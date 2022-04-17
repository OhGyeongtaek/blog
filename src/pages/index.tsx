import React from "react";
import { graphql } from "gatsby";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/functions/SEO";
import MainQueryData from "../types/MainQueryData";
import PaginationList from "../components/pages/PaginationList";

type Props = {
  data: MainQueryData;
};

const GyeongLogPostList = ({ data }: Props) => {
  return (
    <>
      {data && (
        <MainLayout>
          <SEO title="게시글 목록" />
          <PaginationList data={data.allMarkdownRemark} />
        </MainLayout>
      )}
    </>
  );
};

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
