import React from "react";
import { graphql } from "gatsby";
import GlobalStyler from "../components/GlobalStyler";
import Header from "../components/Header";
import styled from "@emotion/styled";
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

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

// 코드 하이라이터 불러오기
defineCustomElements();

export default ({ data }: Props) => {
  const { title, date, description } = data.markdownRemark.frontmatter;

  return (
    <div>
      <GlobalStyler />
      <Header></Header>
      <Contents>
        <TitleBox>
          <h1>{title}</h1>
          <span>{date}</span>
        </TitleBox>
        <Description>목표 : {description}</Description>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </Contents>
      <Footer />
    </div>
  );
};

const Contents = styled.article`
  max-width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  color: #444;

  & h1 {
    padding: 20px 8px;
    font-weight: bold;
  }

  & p {
    font-size: 0.85rem;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 20px;
  & h1 {
    font-size: 2rem;
  }
  & span {
    font-size: 0.85rem;
  }
`;

const Description = styled.h2`
  font-size: 0.95rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        date
        description
      }
    }
  }
`;
