import React from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const styles = css`
  ${emotionReset};

  body {
    font-family: "Noto Sans Kr";
  }
`;

function Layout(props) {
  return <Global styles={styles} />;
}

export default Layout;
