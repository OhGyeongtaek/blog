import React from "react";
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

function Layout(props) {
  return <Global styles={emotionReset} />;
}

export default Layout;
