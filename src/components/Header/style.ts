import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";

export const HeaderStyler = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.primary};
`;

export const Logo = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  color: ${Colors.primary};
`;
