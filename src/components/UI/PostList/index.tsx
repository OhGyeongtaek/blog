import React from "react";
import { RemarkNode } from "../../types/MarkdownRemark";
import ListItem, { ListItemProps } from "../PostListItem";

type Props = {
  items: RemarkNode[];
  onClickItem?: (item: ListItemProps["item"]) => void;
};

function List({ items, onClickItem }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          item={item}
          key={`list-item-${item.id}`}
          onClickItem={onClickItem}
        />
      ))}
    </ul>
  );
}

export { Props as ListProps };

export default List;
