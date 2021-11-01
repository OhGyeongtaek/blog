import { Link } from "gatsby";
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

function Header() {
  return (
    <HeaderStyler>
      <Link to="/">
        <Logo>GyeongLog</Logo>
      </Link>
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
