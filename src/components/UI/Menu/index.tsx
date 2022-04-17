import styled from "@emotion/styled";
import { navigate } from "gatsby-link";
import React from "react";

type Props = {
  items: MenuItem[];
};

type MenuItem = {
  id: string;
  label: string;
  slug?: string;
};

function Menu({ items }: Props) {
  const handleClickItem = (item: MenuItem) => {
    if (item.slug) {
      navigate(item.slug);
    }
  };

  return (
    <MenuList>
      {items.map((item) => (
        <MenuListItem
          key={`menu-list-item-${item.id}`}
          onClick={() => handleClickItem(item)}
        >
          {item.label}
        </MenuListItem>
      ))}
    </MenuList>
  );
}

const MenuList = styled.ul`
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px 0;
  background: #fff;
`;

const MenuListItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background: #eee;
  }
`;

export { MenuItem };
export default Menu;
