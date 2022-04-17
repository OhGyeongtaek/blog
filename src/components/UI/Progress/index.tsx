import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../../consts/thema";

const Progress = styled.span`
  display: inline-block;

  border-top: 3px dotted ${Colors.primary};
  border-left: 3px dotted ${Colors.primary};
  border-radius: 50px;

  width: 50px;
  height: 50px;

  animation: 2s linear infinite loadding;

  @keyframes loadding {
    from {
      transform: rotate(1turn);
    }

    to {
      transform: rotate(0turn);
    }
  }
`;

export default Progress;
