import React from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
//
const styles = css`
  ${emotionReset};

  body {
    font-family: "Noto Sans Kr";
  }

  a {
    color: #3333;
    text-decoration: none;
  }

  @media print {
    #header {
      display: none;
    }
    #footer {
      display: none;
    }
  }
`;

function GlobalStyler(props) {
  return <Global styles={styles} />;
}

export default GlobalStyler;
