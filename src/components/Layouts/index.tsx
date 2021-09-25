import React from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

const styles = css`
  ${emotionReset};

  body {
    font-family: "Noto Sans Korean";
  }
`;

function Layout(props) {
  return <Global styles={styles} />;
}

export default Layout;
