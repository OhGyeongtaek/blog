import styled from "@emotion/styled";
import React, { useState } from "react";
import { Colors } from "../../consts/thema";

const Styler = styled.label<{ isFocus: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  margin: 40px auto;
  border: 1px solid ${Colors.primary};
  border-radius: 4px;
  ${({ isFocus }) => `${isFocus ? "box-shadow: 0px 0px 5px 0px #999" : ""}`};
`;

const SearchBar = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  padding: 8px;
  background: none;
`;

const SearchContentCounter = styled.strong`
  margin: 0 8px;
`;

function SearchInput(props) {
  const [isFocus, setIsFocus] = useState(false);

  console.log(isFocus);

  return (
    <Styler htmlFor="search-input" isFocus={isFocus}>
      <SearchBar
        type="text"
        id="search-input"
        placeholder="검색어를 입력해주세요."
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      <SearchContentCounter>20</SearchContentCounter>
    </Styler>
  );
}

export default SearchInput;
