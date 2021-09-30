import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";
import { Description, DescriptionDate, Item, Title } from "./style";

type Props = {
  item: {
    id: string;
    slug: string;
    title: string;
    description: string;
    date: string;
  };
  onClickItem?: (item: Props["item"]) => void;
};

function ListItem({ item, onClickItem }: Props) {
  const handleClickItem = () => {
    onClickItem?.(item);
  };

  return (
    <Item onClick={handleClickItem}>
      <Title> {item.title} </Title>
      <Description>{item.description}</Description>
      <DescriptionDate>{item.date}</DescriptionDate>
    </Item>
  );
}

export { Props as ListItemProps };

export default ListItem;
