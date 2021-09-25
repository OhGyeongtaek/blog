import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";

const HeaderStyler = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.primary};
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  color: ${Colors.primary};
`;

function Header(props) {
  return (
    <HeaderStyler>
      <Logo>Oh Gyeong Taek Blog</Logo>
    </HeaderStyler>
  );
}

export default Header;
