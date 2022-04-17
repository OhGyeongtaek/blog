import React from "react";
import styled from "@emotion/styled";

function Header() {
  return (
    <HeaderStyler id="header">
      <a href="/">
        <Logo>GyeongLog</Logo>
      </a>
    </HeaderStyler>
  );
}

const HeaderStyler = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.25rem;
  color: #666;
`;

export default Header;
