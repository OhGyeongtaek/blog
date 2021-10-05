import React from "react";
import { graphql } from "gatsby";
import GlobalStyler from "../components/GlobalStyler";
import Header from "../components/Header";

type Props = {
  data: QueryData;
};

type QueryData = {
  markdownRemark: {
    html: string;
    frontmatter: {
      slug: string;
      title: string;
      description: string;
      hash: string[];
      date: string;
    };
  };
};

export default ({ data }: Props) => (
  <div>
    <GlobalStyler />
    <Header></Header>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
);

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
