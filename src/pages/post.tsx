import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/functions/SEO";

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
    <MainLayout>
      <SEO {...{ title, description }} />
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
    </MainLayout>
  );
};

const ContentWrap = styled.article`
  max-width: 740px;
  padding: 40px 0;
  margin: 0 auto;
  color: #444;
`;

const Contents = styled.div`
  letter-spacing: -0.04px;

  & img {
    max-width: 100%;
  }

  & h1 {
    font-size: 1.3rem;
    padding: 20px 0px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }

  & h2 {
    font-size: 1.2rem;
    padding: 10px 0px;
    font-weight: bold;
    margin: 4px 0;
  }

  & h3 {
    font-size: 1.1rem;
    padding: 10px 0px;
    font-weight: bold;
    margin: 4px 0;
  }

  & b {
    font-weight: bold;
  }

  & p {
    line-height: 28px;
    margin: 10px 0;
  }

  & a {
    color: #29d;
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

  // 리스트 스타일 정의
  ul {
    list-style: inside;
    padding: 8px 16px;
    line-height: 140%;
  }

  ol {
    padding: 8px 32px;
    line-height: 140%;
    list-style: auto;
  }

  li {
    font-size: 0.95rem;
  }

  li > p:first-child {
    padding-left: 0;
  }
  // > 를 이용하여 글을 작성할때 사용되는 태그
  blockquote {
    border-left: solid 4px #ccc;
    background: #f8f8f8;
    padding: 4px 16px;
    margin: 4px 0;
  }

  blockquote p {
    padding: 0;
    font-size: 0.85rem;
  }

  .multicode {
    display: flex;
    justify-content: space-between;
  }

  .multicode > * {
    width: 48%;
  }

  figure {
    padding: 10px 0;
  }

  figure figcaption {
    font-size: 0.9rem;
    text-align: center;
    padding-top: 10px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 20px 10px;

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
