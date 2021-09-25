import styled from "@emotion/styled";
import React from "react";
import ListItem, { ListItemProps } from "../ListItem";

type Props = {
  items: ListItemProps["item"][];
};

function List({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem item={item} key={`list-item-${item.id}`} />
      ))}
    </ul>
  );
}

export { Props as ListProps };

export default List;
