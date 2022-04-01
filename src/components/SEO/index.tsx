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

  const metaData = [
    ...meta,
    { property: "description", content: description },
    { property: "og:title", content: showTitle },
    { property: "og:description", content: description },
    {
      property: "og:image",
      content:
        "https://user-images.githubusercontent.com/20200820/139200331-508670ad-af76-482e-82f9-0f1b62d9ed83.png",
    },
  ];

  return (
    <Helmet meta={metaData} title={showTitle}>
      <html lang="ko" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <meta
        name="google-site-verification"
        content="1GpNCEOiYHBY3AjieDZndBpwcsf7EJ76U-Q-2YPkSuQ"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  description: "[Gyeonglog] 기술블로그입니다.",
  meta: [],
};

export default SEO;
