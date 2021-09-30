import styled from "@emotion/styled";
import React from "react";
import ListItem, { ListItemProps } from "../ListItem";

type Props = {
  items: ListItemProps["item"][];
  onClickItem?: (item: ListItemProps["item"]) => void;
};

function List({ items, onClickItem }: Props) {
  const handleClickItem = (item: ListItemProps["item"]) => {
    onClickItem?.(item);
  };

  return (
    <ul>
      {items.map((item) => (
        <ListItem
          item={item}
          key={`list-item-${item.id}`}
          onClickItem={handleClickItem}
        />
      ))}
    </ul>
  );
}

export { Props as ListProps };

export default List;
