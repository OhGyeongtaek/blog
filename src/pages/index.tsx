import React, { useCallback, useEffect, useState } from "react";
import List from "../components/PostList";
import { ListItemProps } from "../components/PostListItem";
import { graphql, navigate } from "gatsby";
import styled from "@emotion/styled";
import {
  AllMarkdownRemark,
  PostCategoryStatistics,
} from "../types/MarkdownRemark";
import Pagination from "../components/Pagination";
import MainLayout from "../components/Layouts/MainLayout";
import SEO from "../components/SEO";
import ChipGroup from "../components/ChipGroup";
import useQeuryString from "../hooks/useQeuryString";
import { POST_LIMIT } from "../consts/pagination";
import { CATEGORY_TYPE_ALL, DEFAULT_CATEGORY } from "../consts/search";
import { ChipItem } from "../components/Chip";

type Props = {
  data: AllMarkdownRemark;
  pageContext: {
    limit: number;
    page: number;
  };
};

const GyeongLogPostList = ({ data, pageContext }: Props) => {
  const [queryString, setQueryString] = useQeuryString();

  const [categories, setCategories] = useState<ChipItem[]>([]);

  const { nodes, totalCount, group } = data.allMarkdownRemark;

  const posts = nodes
    .filter((node) => {
      return (
        queryString.category === CATEGORY_TYPE_ALL ||
        queryString.category?.split(",").indexOf(node.frontmatter.category) > -1
      );
    })
    .slice((queryString.page - 1) * POST_LIMIT, POST_LIMIT);

  const createCategories = useCallback((selected: string[]) => {
    if (group?.length > 0) {
      const newCategories = getCategories(group, selected);

      setQueryString.setCategory(
        newCategories
          .filter((category) => category.checked)
          .map((category) => category.value)
          .join(",")
      );

      setCategories(newCategories);
    }
  }, []);

  useEffect(() => {
    createCategories([]);
  }, []);

  const handleClickItem = ({ frontmatter }: ListItemProps["item"]) => {
    navigate(`/${frontmatter.category}/${frontmatter.slug}`);
  };

  const handleClickPageButton = (page: number) => {
    setQueryString.setPage(page);
  };

  const handleChangeCategories = (items: ChipItem[], changeItem: ChipItem) => {
    const idx = items.findIndex((item) => item.type === CATEGORY_TYPE_ALL);

    idx > -1 && changeItem.type === CATEGORY_TYPE_ALL
      ? createCategories([])
      : createCategories(items.map((item) => String(item.value)));
  };

  return (
    <MainLayout>
      <List items={posts} onClickItem={handleClickItem} />
      <Pagination
        count={totalCount}
        current={queryString.page}
        rowLimit={pageContext.limit}
        onClickButton={handleClickPageButton}
      />
    </MainLayout>
  );
};

const getCategories = (group: PostCategoryStatistics[], selected: string[]) => {
  const items: ChipItem[] = [
    {
      value: DEFAULT_CATEGORY,
      label: DEFAULT_CATEGORY,
      type: CATEGORY_TYPE_ALL,
      checked: selected.length === 0,
      disabled: selected.length === 0,
    },
  ];

  group.forEach(({ fieldValue, totalCount }) => {
    items.push({
      value: fieldValue,
      label: `${fieldValue} : ${totalCount}`,
      checked: selected.indexOf(fieldValue) > -1,
    });
  });

  return items;
};

const Contents = styled.main`
  max-width: 800px;
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

export default React.memo(GyeongLogPostList);
