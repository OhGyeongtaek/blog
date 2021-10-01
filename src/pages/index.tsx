import React, { useMemo } from "react";

import Header from "../components/Header";
import List from "../components/List";
import Layout from "../components/Layouts";
import SearchInput from "../components/SearchInput";
import { ListItemProps } from "../components/ListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { Colors } from "../consts/thema";

export const Contents = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const More = styled.article`
  font-size: 3rem;
  text-align: center;
  margin-top: -20px;
  color: ${Colors.primary};

  & strong {
    cursor: pointer;
  }
`;
type Props = {
  data: QueryData;
};

type QueryData = {
  allMarkdownRemark: {
    nodes: {
      id: string;
      frontmatter: {
        slug: string;
        title: string;
        description: string;
        hash: string[];
        date: string;
      };
    }[];
  };
};

// markup
const IndexPage = ({ data }: Props) => {
  const items = useMemo<ListItemProps["item"][]>(
    () =>
      data.allMarkdownRemark.nodes.map((node) => ({
        id: node.id,
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        description: node.frontmatter.description,
        date: node.frontmatter.date,
      })),
    []
  );

  const handleClickItem = (item: ListItemProps["item"]) => {
    navigate(`/post/${item.slug}`);
  };

  return (
    <div>
      <Layout />
      <Header></Header>
      <Contents>
        <SearchInput />
        <List items={items} onClickItem={handleClickItem} />
      </Contents>
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
          description
          date
          hash
        }
      }
    }
  }
`;

export default IndexPage;
