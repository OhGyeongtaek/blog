import React, { useMemo } from "react";
import { Helmet } from "react-helmet";

type Meta = React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[];

type Props = {
  title: string;
  description?: string;
  meta?: Meta;
};

function SEO({ title, description, meta }: Props) {
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
    <Helmet meta={metaData} title={showTitle}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  description: "개발을 하며 공부한 내용을 공유하기 위해 만든 블로그입니다.",
  meta: [],
};

export default SEO;
