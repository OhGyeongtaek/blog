import styled from "@emotion/styled";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { POST_LIMIT } from "../../consts/pagination";
import { CATEGORY_TYPE_ALL, DEFAULT_CATEGORY } from "../../consts/search";
import useQeuryString from "../../hooks/useQeuryString";
import {
  AllMarkdownRemark,
  PostCategoryStatistics,
  RemarkNode,
} from "../../types/MarkdownRemark";
import { ChipItem } from "../Chip";
import ChipGroup from "../ChipGroup";
import Pagination from "../Pagination";
import ListItem, { ListItemProps } from "../PostListItem";
import Progress from "../Progress";

type Props = {
  filter?: boolean;
  pagination?: boolean;
  postData: AllMarkdownRemark;
  onClickItem?: (item: ListItemProps["item"]) => void;
};

function List({ postData, pagination, filter, onClickItem }: Props) {
  const { nodes, group } = postData.allMarkdownRemark;

  const [showPosts, setShowPosts] = useState<RemarkNode[]>();

  const [{ page, category }, setQueryString] = useQeuryString();

  const posts = nodes.filter((node) => {
    if (category === CATEGORY_TYPE_ALL) {
      return true;
    }

    return category === node.frontmatter.category;
  });

  useEffect(() => {
    const startIndes = (page - 1) * POST_LIMIT;
    const list = posts.slice(startIndes, startIndes + POST_LIMIT - 1);

    setShowPosts(list);

    if (list.length === 0) {
      setQueryString.setPage(1);
    }
  }, [page, category]);

  const categories = getCategories(group, category);

  const handleClickItem = (item: ListItemProps["item"]) => {
    onClickItem?.(item);
  };

  const handleClickPageButton = (page: number) => {
    setQueryString.setPage(page);
  };

  const handleChangeGroup = (category: string) => {
    setQueryString.setCategory(category);
  };

  if (!showPosts) {
    return (
      <ProgressWrap>
        <Progress />
      </ProgressWrap>
    );
  }

  return (
    <div>
      {filter && <ChipGroup items={categories} onChange={handleChangeGroup} />}
      <ul>
        {showPosts &&
          showPosts.map((item) => (
            <ListItem
              item={item}
              key={`list-item-${item.id}`}
              onClickItem={handleClickItem}
            />
          ))}
      </ul>

      {pagination && (
        <Pagination
          count={posts.length}
          current={page}
          onClickButton={handleClickPageButton}
        />
      )}
    </div>
  );
}

const getCategories = (group: PostCategoryStatistics[], selected: string) => {
  const items: ChipItem[] = [
    {
      value: DEFAULT_CATEGORY,
      label: DEFAULT_CATEGORY,
      type: CATEGORY_TYPE_ALL,
      checked: selected === DEFAULT_CATEGORY,
    },
  ];

  group.forEach(({ fieldValue, totalCount }) => {
    items.push({
      value: fieldValue,
      label: `${fieldValue} : ${totalCount}`,
      checked: selected === fieldValue,
    });
  });

  return items;
};

const ProgressWrap = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Props as ListProps };

export default List;
