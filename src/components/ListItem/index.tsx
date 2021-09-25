import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";

type Props = {
  item: {
    id: number;
    [x: string]: number | string;
  };
};

const Item = styled.li`
  padding-left: 16px;
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

const Name = styled.strong`
  color: ${Colors.primary};
`;

function ListItem({ item }: Props) {
  return (
    <Item>
      <Title> {item.title} </Title>
      <Description>컨텐츠 내용입니다</Description>
      <Description>
        <Name>오경택</Name> 2021.09.25
      </Description>
    </Item>
  );
}

export { Props as ListItemProps };

export default ListItem;
