import styled from "@emotion/styled";
import React from "react";

function Footer(props) {
  return (
    <FooterStyler>
      <LinkGithub href="https://github.com/OhGyeongtaek/blog">
        <i className="fab fa-github"></i>
      </LinkGithub>
      <CopyRight>Copyright © BY GyeongLog 2021</CopyRight>
    </FooterStyler>
  );
}

const FooterStyler = styled.footer`
  padding: 30px 0;
  text-align: center;
  border-top: 1px solid #ccc;
  background: #eee;

  & a {
    color: #666;
  }
`;

const LinkGithub = styled.a`
  font-size: 2rem;

  &:hover {
    color: #333;
  }
`;

const CopyRight = styled.p`
  padding-top: 8px;
  font-size: 0.8rem;
  color: #666;
`;

export default Footer;
