import styled from "@emotion/styled";
import { Colors } from "../consts/thema";

export const Contents = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const More = styled.article`
  font-size: 3rem;
  text-align: center;
  margin-top: -20px;
  color: ${Colors.primary};

  & strong {
    cursor: pointer;
  }
`;
