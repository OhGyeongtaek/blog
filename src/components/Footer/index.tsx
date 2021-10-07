import styled from "@emotion/styled";
import React from "react";

function Footer(props) {
  return (
    <FooterStyler>
      <a href="https://github.com/OhGyeongtaek/blog">
        https://github.com/OhGyeongtaek/blog
      </a>
    </FooterStyler>
  );
}

const FooterStyler = styled.footer`
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid #ccc;
  background: #eee;

  & a {
    color: #666;
  }
`;

export default Footer;
