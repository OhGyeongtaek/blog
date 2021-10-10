import { Link } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

function Header(props) {
  return (
    <HeaderStyler>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        />
      </Helmet>
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
