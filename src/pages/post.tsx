import React from "react";
import { graphql } from "gatsby";
import GlobalStyler from "../components/GlobalStyler";
import Header from "../components/Header";
import styled from "@emotion/styled";
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";
import Footer from "../components/Footer";

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
      <Header {...{ title, description }} />

      <ContentWrap>
        <TitleBox>
          <h1>{title}</h1>
          <span>{date}</span>
        </TitleBox>
        <Description>목표 : {description}</Description>
        <Contents
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </ContentWrap>
      <Footer />
    </div>
  );
};

const ContentWrap = styled.article`
  max-width: 800px;
  padding: 40px 0;
  margin: 0 auto;
  color: #444;
`;

const Contents = styled.div`
  & h1 {
    font-size: 1.3rem;
    padding: 20px 0px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }

  & h2 {
    font-size: 1rem;
    padding: 8px 0px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  & p {
    font-size: 0.95rem;
    line-height: 200%;
  }

  & a {
    color: #444;
  }

  & a:hover {
    text-decoration: underline;
  }

  & deckgo-highlight-code {
    box-shadow: none;
    line-height: 120%;
  }

  & deckgo-highlight-code .carbon {
    display: none;
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

const Description = styled.p`
  font-size: 0.95rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
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
