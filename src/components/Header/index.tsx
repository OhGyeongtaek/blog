import { Link } from "gatsby";
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

function Header({ title, description, meta }: Props) {
  const showTitle = `${title} | GyeongLog`;
  const metaData = useMemo(
    () => [
      ...meta,
      { property: "og:title", content: showTitle },
      { property: "og:description", content: description },
      {
        property: "og:image",
        content:
          "https://user-images.githubusercontent.com/20200820/139200331-508670ad-af76-482e-82f9-0f1b62d9ed83.png",
      },
    ],
    []
  );

  return (
    <HeaderStyler>
      <Helmet meta={metaData}>
        <title>{showTitle}</title>
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

Header.defaultProps = {
  title: "GyeongLog",
  description: "",
  meta: [],
};

type Meta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[];

type Props = {
  title?: string;
  description?: string;
  meta?: Meta;
};

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
