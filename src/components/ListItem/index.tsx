import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";

type Props = {
  item: {
    id: number;
    title: string;
    description: string;
    createdDate: string;
  };
};

const Item = styled.li`
  padding: 0 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Colors.primary};
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  padding-bottom: 8px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  padding: 4px 0;
  color: #666;
`;

const DescriptionDate = styled.p`
  font-size: 0.85rem;
  padding: 4px 0;
  color: #666;
  text-align: right;
`;

const Name = styled.strong`
  color: ${Colors.primary};
`;

function ListItem({ item }: Props) {
  return (
    <Item>
      <Title> {item.title} </Title>
      <Description>{item.description}</Description>
      <DescriptionDate>{item.createdDate}</DescriptionDate>
    </Item>
  );
}

export { Props as ListItemProps };

export default ListItem;
