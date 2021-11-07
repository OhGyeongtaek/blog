import React from "react";
import List from "../components/PostList";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import { AllMarkdownRemark } from "../types/MarkdownRemark";
import Pagination from "../components/Pagination";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";
import ChipGroup, { ChipGroupProps } from "../components/ChipGroup";
import useListUrl from "../hooks/useListUrl";
import { POST_LIMIT } from "../consts/pagination";
import { DEFAULT_CATEGORY } from "../consts/search";

type Props = {
  data: AllMarkdownRemark;
  pageContext: {
    limit: number;
    page: number;
  };
};

const categoies: ChipGroupProps["items"] = [
  {
    value: DEFAULT_CATEGORY,
    label: DEFAULT_CATEGORY,
    checked: true,
    disabled: true,
  },
];

const GyeongLog = ({ data, pageContext }: Props) => {
  const [searchValues, setSearchValues] = useListUrl();

  const { nodes, totalCount, group } = data.allMarkdownRemark;

  const items = nodes.slice((searchValues.page - 1) * POST_LIMIT, POST_LIMIT);

  group.forEach(({ fieldValue, totalCount }) => {
    categoies.push({
      value: fieldValue,
      label: `${fieldValue} : ${totalCount}`,
    });
  });

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
        <ChipGroup items={categoies} />
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
