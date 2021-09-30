import { Link } from "gatsby";
import React from "react";
import { HeaderStyler, Logo } from "./style";

function Header(props) {
  return (
    <HeaderStyler>
      <Link to="/">
        <Logo>Oh Gyeong Taek Blog</Logo>
      </Link>
    </HeaderStyler>
  );
}

export default Header;
