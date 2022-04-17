import { navigate } from "gatsby";
import React, { useCallback, useEffect, useLayoutEffect } from "react";
import useQeuryString from "../../../hooks/useQeuryString";
import { getFilteringItems, getCategoriesAddAll } from "../../../actions";
import { AllMarkdownRemark } from "../../../types/MarkdownRemark";
import { ChipGroupOnlyOne, Chip, Container } from "./styles";
import Pagination from "../../UI/Pagination";
import PostList from "../../UI/PostList";
import { ListItemProps } from "../../UI/PostListItem";

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
    <Container>
      <ChipGroupOnlyOne onChange={handleChangeGroup}>
        {categories.map((item) => (
          <Chip item={item} key={`chip-${item.value}`} />
        ))}
      </ChipGroupOnlyOne>

      <PostList items={items} onClickItem={handleClickItem} />

      <Pagination
        current={page}
        count={total}
        onClickButton={handleClickPageButton}
      />
    </Container>
  );
}

export default PaginationList;
