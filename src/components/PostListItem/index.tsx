import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";
import { RemarkNode } from "../../types/MarkdownRemark";

type Props = {
  item: RemarkNode;
  onClickItem?: (item: Props["item"]) => void;
};

function ListItem({ item, onClickItem }: Props) {
  return (
    <Item onClick={() => onClickItem?.(item)}>
      <Title> {item.frontmatter.title} </Title>
      <Description>{item.frontmatter.description}</Description>
      <DescriptionDate>{item.frontmatter.date}</DescriptionDate>
    </Item>
  );
}

const Item = styled.li`
  padding: 0 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 0.9rem;
  padding: 4px 0;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DescriptionDate = styled.p`
  font-size: 0.85rem;
  padding: 4px 0;
  color: #666;
  text-align: right;
`;

export { Props as ListItemProps };

export default ListItem;
