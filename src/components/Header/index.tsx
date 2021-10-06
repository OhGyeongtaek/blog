import { Link } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";

function Header(props) {
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
  border-bottom: 1px solid ${Colors.primary};
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  color: ${Colors.primary};
`;

export default Header;
