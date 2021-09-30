import styled from "@emotion/styled";
import { Colors } from "../../consts/thema";

export const SearchBarWrap = styled.label<{ isFocus: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 40px auto;
  border: 1px solid ${Colors.primary};
  border-radius: 4px;
  ${({ isFocus }) => `${isFocus ? "box-shadow: 0px 0px 8px 0px #666" : ""}`};
`;

export const SearchBar = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 8px;
  background: none;

  &: focus {
    outline: none;
  }
`;

export const SearchContentCounter = styled.strong`
  color: ${Colors.primary};
  font-size: 0.8rem;
  margin: 0 8px;
`;
