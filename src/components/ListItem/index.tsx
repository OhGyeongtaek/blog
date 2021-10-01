import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";

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

export { Props as ListItemProps };

export default ListItem;
