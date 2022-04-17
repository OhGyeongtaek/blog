import { css } from "@emotion/react";
import { Colors } from "../../../consts/thema";

export const ChipBaseCss = css`
  font-size: 0.8rem;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ccc;
  background: #fff;
  cursor: pointer;
  color: ${Colors.black};

  &[aria-checked="true"] {
    border: 2px solid ${Colors.primary};
    box-sizing: border-box;
  }
`;
