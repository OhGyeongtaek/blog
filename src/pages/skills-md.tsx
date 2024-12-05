import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { defineCustomElements } from "@deckdeckgo/highlight-code/dist/loader";
import { Colors } from "../consts/thema";

type Props = {
  data: QueryData;
};

type QueryData = {
  markdownRemark: {
    html: string;
  };
};

// 코드 하이라이터 불러오기
defineCustomElements();

export default ({ data }: Props) => {
  return (
    <ContentWrap>
      <Contents dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </ContentWrap>
  );
};

const ContentWrap = styled.article`
  max-width: 740px;
  margin: 0 auto;
  color: #444;
`;

const Contents = styled.div`
  letter-spacing: -0.04px;

  & img {
    max-width: 100%;
  }

  & h1 {
    font-size: 24px;
    padding: 20px 0px;
    font-weight: bold;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 10px;
  }

  & h2 {
    font-size: 20px;
    color: rgb(118, 221, 223);
    padding: 10px 0px;
    font-weight: 500;
    margin: 4px 0;
  }

  .period {
    font-size: 12px;
    color: ${Colors.black}
  }

  & h3 {
    font-size: 16px;
    padding: 10px 0px;
    font-weight: 500;
    margin: 0;
  }

  & b {
    font-weight: bold;
  }

  & p {
    line-height: 20px;
    padding:0;
    margin:0;
    font-size:12px;
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
    padding-left: 12px;
    line-height: 140%;
    margin:0;
  }

  ol {
    padding: 8px 32px;
    line-height: 140%;
    list-style: auto;
  }

  li {
    font-size:12px;
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
  hr {
    height:1px;
    border:none;
    border-bottom: 1px solid #e9ecef;
  }
`;

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
