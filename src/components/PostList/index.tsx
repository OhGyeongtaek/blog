import React from "react";
import { RemarkNode } from "../../types/MarkdownRemark";
import ListItem, { ListItemProps } from "../PostListItem";

type Props = {
  items: RemarkNode[];
  onClickItem?: (item: ListItemProps["item"]) => void;
};

function List({ items, onClickItem }: Props) {
  const handleClickItem = (item: ListItemProps["item"]) => {
    onClickItem?.(item);
  };

  // const handleClickPageButton = (page: number) => {
  //   setQueryString.pushPage(page);
  // };

  // const handleChangeGroup = (category: string) => {
  //   setQueryString.pushCategory(category);
  // };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListItem
            item={item}
            key={`list-item-${item.id}`}
            onClickItem={handleClickItem}
          />
        ))}
      </ul>
    </div>
  );
}

// const ProgressWrap = styled.div`
//   height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export { Props as ListProps };

export default List;
