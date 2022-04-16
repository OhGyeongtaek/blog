import { navigate } from "gatsby";
import React, { useCallback, useEffect } from "react";
import useQeuryString from "../../hooks/useQeuryString";
import { getFilteringItems, getCategoriesAddAll } from "../../actions";
import { AllMarkdownRemark } from "../../types/MarkdownRemark";
import ChipGroup from "../ChipGroup";
import Pagination from "../Pagination";
import List from "../PostList";
import { ListItemProps } from "../PostListItem";

interface Props {
  data: AllMarkdownRemark;
}

function PaginationList({ data }: Props) {
  const { nodes, group } = data;
  const [{ page, category }, { pushPage, pushCategory }] = useQeuryString();

  const [items, total] = getFilteringItems(nodes, page, category);

  const categories = getCategoriesAddAll(group, category);

  const handleClickItem = useCallback(
    ({ frontmatter }: ListItemProps["item"]) => {
      navigate(`/${frontmatter.category}/${frontmatter.slug}`);
    },
    []
  );

  const handleClickPageButton = useCallback((page: number) => {
    pushPage(page);
  }, []);

  const handleChangeGroup = useCallback((category: string) => {
    pushCategory(category);
  }, []);

  useEffect(() => {
    if (items.length === 0) pushPage(1);
  }, [categories]);

  return (
    <>
      <ChipGroup items={categories} onChange={handleChangeGroup} />
      <List items={items} onClickItem={handleClickItem} />
      <Pagination
        current={page}
        count={total}
        onClickButton={handleClickPageButton}
      />
    </>
  );
}

export default PaginationList;
