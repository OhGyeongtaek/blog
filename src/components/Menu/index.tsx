import styled from "@emotion/styled";
import React from "react";

type Props = {
  items: MenuItems[];
};

type MenuItems = {
  id: string;
  label: string;
  to?: string;
};

function Menu({ items }: Props) {
  return (
    <MenuList>
      {items.map((item) => (
        <MenuListItem key={`menu-list-item-${item.id}`}>
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

export { MenuItems };
export default Menu;
