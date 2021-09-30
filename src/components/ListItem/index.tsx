import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";
import { Description, DescriptionDate, Item, Title } from "./style";

type Props = {
  item: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
};

function ListItem({ item }: Props) {
  return (
    <Item>
      <Title> {item.title} </Title>
      <Description>{item.description}</Description>
      <DescriptionDate>{item.date}</DescriptionDate>
    </Item>
  );
}

export { Props as ListItemProps };

export default ListItem;
